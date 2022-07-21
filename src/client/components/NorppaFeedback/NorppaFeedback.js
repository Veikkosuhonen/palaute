import React from 'react'
import { useHistory } from 'react-router'

import { Box, Button, Typography } from '@mui/material'
import { Form, Formik } from 'formik'
import { useTranslation } from 'react-i18next'
import { useSnackbar } from 'notistack'

import FormikTextField from '../FormikTextField'
import FormikCheckBox from '../FormikCheckbox'
import { saveValues } from './utils'
import Title from '../Title'

const styles = {
  description: {
    width: '80%',
    marginTop: 2,
    marginBottom: 3,
    color: '#606060',
  },
  button: {
    width: 'fit-content',
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
  },
}

const NorppaFeedback = () => {
  const { t } = useTranslation()
  const { enqueueSnackbar } = useSnackbar()
  const history = useHistory()

  const handleSubmit = async (values) => {
    try {
      if (!values.feedback.length) {
        enqueueSnackbar(t('norppaFeedback:feedbackLengthError'), {
          variant: 'error',
        })
      }
      await saveValues(values)

      history.push('/')

      enqueueSnackbar(t('norppaFeedback:successAlert'), {
        variant: 'success',
        autoHideDuration: 6000,
      })
    } catch (e) {
      enqueueSnackbar(t('unknownError'), { variant: 'error' })
    }
  }

  const confirmSubmit = (event) => {
    if (
      // eslint-disable-next-line no-alert
      !window.confirm(t('norppaFeedback:confirm'))
    )
      event.preventDefault()
  }
  return (
    <Box>
      <Title>{t('norppaFeedback')}</Title>
      <Typography variant="h4" component="h4">
        {t('norppaFeedback:title')}
      </Typography>
      <Typography variant="body1" component="p" sx={styles.description}>
        {t('norppaFeedback:description')}
      </Typography>
      <Formik
        initialValues={{ feedback: '', responseWanted: false }}
        onSubmit={handleSubmit}
      >
        {({ values, isSubmitting }) => (
          <Form sx={styles.container}>
            <FormikTextField
              name="feedback"
              label={t('norppaFeedback:feedback')}
              helperText={t('norppaFeedback:feedbackHelper')}
              fullWidth
              minRows={4}
              multiline
            />
            <FormikCheckBox
              name="responseWanted"
              label={t('norppaFeedback:responseWanted')}
            />
            <Button
              onClick={confirmSubmit}
              type="submit"
              color="primary"
              variant="contained"
              disabled={!values.feedback.length || isSubmitting}
              sx={styles.button}
            >
              {t('norppaFeedback:submit')}
            </Button>
          </Form>
        )}
      </Formik>
    </Box>
  )
}

export default NorppaFeedback
