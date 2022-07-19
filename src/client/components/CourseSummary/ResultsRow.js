import React, { useRef, useState } from 'react'

import { Tooltip, Typography, ButtonBase, Box } from '@mui/material'
import { makeStyles } from '@mui/styles'

import { ChevronRight } from '@mui/icons-material'
import DoneIcon from '@mui/icons-material/Done'
import ClearIcon from '@mui/icons-material/Clear'
import AccessTimeIcon from '@mui/icons-material/AccessTime'
import { Link as RouterLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import cn from 'classnames'

import ResultItem from './ResultItem'

const useStyles = makeStyles((theme) => ({
  resultCell: {
    padding: theme.spacing(1),
    whiteSpace: 'nowrap',
    textAlign: 'center',
    minWidth: '50px',
  },
  countCell: {
    padding: theme.spacing(1),
    whiteSpace: 'nowrap',
    textAlign: 'center',
    minWidth: '155px',
  },
  labelCell: ({ level }) => ({
    [theme.breakpoints.down('md')]: {
      width: '300px',
      height: '74px', // Sets a good height for the entire row
    },
    [theme.breakpoints.up('md')]: {
      width: '450px',
    },
    [theme.breakpoints.up('lg')]: {
      width: '500px',
    },
    paddingLeft: theme.spacing(level * 2),
    paddingRight: '1rem',
  }),
  accordionButton: {
    width: '100%',
    height: '100%',
    minHeight: '48px',
    maxHeight: '74px',
    paddingLeft: '0.5rem',
    paddingRight: '2.5rem',
    display: 'flex',
    justifyContent: 'space-between',
    borderRadius: '10px',
    textAlign: 'left',
    textTransform: 'none',
    '&:hover': {
      background: 'background',
    },
  },
  link: {
    color: theme.palette.primary.main,
  },
  arrowContainer: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'row-reverse',
    alignItems: 'center',
    paddingRight: '0.7rem',
    '&:hover': {
      color: theme.palette.text.primary,
    },
    color: theme.palette.info.main,
  },
  arrow: {
    transition: 'transform 0.2s ease-out',
  },
  arrowOpen: {
    transform: 'rotate(90deg)',
  },
}))

const getQuestion = (questions, questionId) =>
  questions.find((q) => q.id === questionId)

const ResponseGivenIcon = () => {
  const { t } = useTranslation()
  return (
    <Tooltip title={t('courseSummary:feedbackResponseGiven')}>
      <DoneIcon color="primary" />
    </Tooltip>
  )
}

const ResponseNotGivenIcon = () => {
  const { t } = useTranslation()
  return (
    <Tooltip title={t('courseSummary:feedbackResponseNotGiven')}>
      <ClearIcon color="error" />
    </Tooltip>
  )
}

const FeedbackOpenIcon = () => {
  const { t } = useTranslation()
  return (
    <Tooltip title={t('courseSummary:feedbackStillOpen')}>
      <AccessTimeIcon color="warning" />
    </Tooltip>
  )
}

const FeedbackResponseIndicator = ({ status }) => (
  <>
    {status === 'GIVEN' && <ResponseGivenIcon />}
    {status === 'NONE' && <ResponseNotGivenIcon />}
    {status === 'OPEN' && <FeedbackOpenIcon />}
  </>
)

const ResultsRow = ({
  // id,
  label,
  link,
  results,
  questions,
  children,
  level = 0,
  feedbackCount,
  studentCount,
  feedbackResponseGiven,
  accordionEnabled = false,
  accordionInitialOpen = false,
  onToggleAccordion = () => {},
  cellsAfter = null,
}) => {
  const classes = useStyles({ level })
  const [accordionOpen, setAccordionOpen] = useState(accordionInitialOpen)

  const handleToggleAccordion = () => {
    setAccordionOpen((previousOpen) => !previousOpen)
    onToggleAccordion()
  }

  const percent =
    studentCount > 0 ? ((feedbackCount / studentCount) * 100).toFixed(0) : 0

  return (
    <>
      <tr>
        <td className={cn(classes.labelCell)}>
          {accordionEnabled ? (
            // eslint-disable-next-line react/button-has-type
            <ButtonBase
              onClick={handleToggleAccordion}
              className={classes.accordionButton}
              variant="contained"
              disableRipple
            >
              {label}
              <Box className={classes.arrowContainer}>
                <ChevronRight
                  className={cn({
                    [classes.arrow]: true,
                    [classes.arrowOpen]: accordionOpen,
                  })}
                />
              </Box>
            </ButtonBase>
          ) : (
            // eslint-disable-next-line react/jsx-no-useless-fragment
            <>
              {link ? (
                <ButtonBase
                  to={link}
                  component={RouterLink}
                  className={cn(classes.accordionButton, classes.link)}
                  variant="contained"
                >
                  {label}
                </ButtonBase>
              ) : (
                <Box paddingLeft="0.5rem">{label}</Box>
              )}
            </>
          )}
        </td>
        {results.map(({ questionId, mean, distribution, previous }) => (
          <ResultItem
            key={questionId}
            question={getQuestion(questions, questionId)}
            mean={mean}
            distribution={distribution}
            previous={previous}
            className={classes.resultCell}
          />
        ))}
        <td className={classes.countCell}>
          <Typography component="div">
            {feedbackCount}/{studentCount} ({percent}%)
          </Typography>
        </td>
        <td className={classes.resultCell}>
          <FeedbackResponseIndicator status={feedbackResponseGiven} />
        </td>
        {cellsAfter}
      </tr>
      {accordionEnabled && accordionOpen && children}
    </>
  )
}

export default ResultsRow
