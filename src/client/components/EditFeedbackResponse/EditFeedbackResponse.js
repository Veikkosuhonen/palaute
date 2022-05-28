import React from 'react'
import { useParams, Redirect } from 'react-router-dom'
import { Formik, Form, useField } from 'formik'

import { Card, CardContent, Box, Typography, Divider } from '@material-ui/core'

import { useTranslation, Trans } from 'react-i18next'
import { useSnackbar } from 'notistack'
import { differenceInMonths } from 'date-fns'

import FormikTextField from '../FormikTextField'
import useFeedbackTarget from '../../hooks/useFeedbackTarget'
import AlertLink from '../AlertLink'
import Alert from '../Alert'
import Markdown from '../Markdown'
import apiClient from '../../util/apiClient'
import ResponseEmailButton from './ResponseEmailButton'
import InstructionAccordion from './InstructionAccordion'
import { LoadingProgress } from '../LoadingProgress'

const getInitialValues = (feedbackTarget) => ({
  feedbackResponse: feedbackTarget.feedbackResponse ?? '',
})

const saveValues = async (values, feedbackTargetId) => {
  const { feedbackResponse } = values

  const { data } = await apiClient.put(
    `/feedback-targets/${feedbackTargetId}/reply`,
    {
      data: feedbackResponse,
    },
  )

  return data
}

const MarkdownPreview = () => {
  const [field] = useField('feedbackResponse')

  const { value } = field

  return <Markdown>{value}</Markdown>
}

const EditFeedbackResponse = () => {
  const { id } = useParams()
  const { t } = useTranslation()
  const { enqueueSnackbar } = useSnackbar()

  const { feedbackTarget, isLoading } = useFeedbackTarget(id, {
    skipCache: true,
  })

  if (isLoading) {
    return <LoadingProgress />
  }

  if (!feedbackTarget) {
    return <Redirect to="/" />
  }

  const initialValues = getInitialValues(feedbackTarget)

  const handleSubmit = async (values) => {
    try {
      await saveValues(values, feedbackTarget.id)
      enqueueSnackbar(t('saveSuccess'), { variant: 'success' })
    } catch (error) {
      enqueueSnackbar(t('unknownError'), { variant: 'error' })
    }
  }

  const { feedbackResponseEmailSent, closesAt } = feedbackTarget

  const hideResponseForm = feedbackResponseEmailSent

  const now = Date.now()
  const closeTime = Date.parse(closesAt)
  const feedbackResponseFormDisabled =
    feedbackResponseEmailSent ||
    now < closeTime ||
    differenceInMonths(now, closeTime) > 6

  return (
    <>
      <Card>
        <CardContent>
          {hideResponseForm && (
            <Box mb={2}>
              <Typography variant="h6">
                {t('feedbackResponse:responseLabel')}
              </Typography>
            </Box>
          )}
          {!hideResponseForm && (
            <>
              <InstructionAccordion />
              <Box mb={2}>
                <Alert severity="info">
                  <Trans i18nKey="feedbackResponse:responseInfo">
                    This field supports{' '}
                    <AlertLink
                      href="https://commonmark.org/help/"
                      target="_blank"
                    >
                      Markdown
                    </AlertLink>{' '}
                    syntax
                  </Trans>
                </Alert>
              </Box>
            </>
          )}
          <Formik
            initialValues={initialValues}
            onSubmit={handleSubmit}
            validateOnChange={false}
          >
            {({ isSubmitting, values }) => (
              <Form id="feedback-response-form">
                {!hideResponseForm && (
                  <>
                    <FormikTextField
                      label={
                        feedbackResponseFormDisabled
                          ? t('feedbackResponse:formDisabled')
                          : t('feedbackResponse:responseLabel')
                      }
                      name="feedbackResponse"
                      rows={10}
                      fullWidth
                      multiline
                      disabled={feedbackResponseFormDisabled}
                    />
                    <Box my={2}>
                      <ResponseEmailButton
                        disabled={
                          isSubmitting ||
                          feedbackTarget.feedbackResponseEmailSent ||
                          !values.feedbackResponse
                        }
                        feedbackTargetId={feedbackTarget.id}
                        values={values}
                      />
                    </Box>
                    <Box my={2}>
                      <Divider />
                    </Box>
                    <Box mb={2}>
                      <Typography color="textSecondary">
                        {t('feedbackResponse:previewLabel')}
                      </Typography>
                    </Box>
                  </>
                )}
                <MarkdownPreview />
              </Form>
            )}
          </Formik>
        </CardContent>
      </Card>
    </>
  )
}

export default EditFeedbackResponse
