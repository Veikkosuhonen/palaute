import React from 'react'

import { Box, Select, FormControl, MenuItem, TextField, Typography } from '@mui/material'
import { debounce } from 'lodash'

import apiClient from '../../util/apiClient'
import useHistoryState from '../../hooks/useHistoryState'
import FeedbackTargetItem from './FeedbackTargetItem'

const FeedbackTargetInspector = () => {
  const [potentialFeedbackTargets, setPotentialFeedbackTargets] = useHistoryState('potentialFeedbacktargets', [])
  const [count, setCount] = useHistoryState('potentialFeedbackTargetCount', 0)

  const [query, setQuery] = useHistoryState('feedback-target_query', {
    id: '',
    code: '',
    name: '',
    language: 'fi',
  })

  const runQuery = debounce(async params => {
    const { data } = await apiClient.get('/admin/feedback-targets', { params })
    const { feedbackTargets, count } = data

    setPotentialFeedbackTargets(
      feedbackTargets.map(fbt => ({
        ...fbt,
        opensAt: new Date(fbt.opensAt),
        closesAt: new Date(fbt.closesAt),
        courseRealisation: {
          ...fbt.courseRealisation,
          startDate: new Date(fbt.courseRealisation.startDate),
          endDate: new Date(fbt.courseRealisation.endDate),
        },
      }))
    )
    setCount(count)
  }, 600)

  const handleChange = values => {
    const newQuery = { ...query, ...values }
    setQuery(newQuery)
    runQuery(newQuery)
  }

  return (
    <Box mt={4}>
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mx: 'auto' }}>
        <TextField
          sx={{ m: 1 }}
          variant="outlined"
          label="ID"
          value={query.id}
          onChange={e => handleChange({ ...query, id: e.target.value })}
        />

        <TextField
          sx={{ m: 1 }}
          variant="outlined"
          label="Course Code"
          value={query.code}
          onFocus={() => setQuery({ ...query, id: '' })}
          onChange={e => handleChange({ ...query, code: e.target.value })}
        />

        <Box sx={{ width: '100%', position: 'relative' }}>
          <TextField
            fullWidth
            label="CU Name"
            value={query.name}
            onFocus={() => setQuery({ ...query, id: '' })}
            onChange={e => handleChange({ ...query, name: e.target.value })}
            InputProps={{ sx: { pr: '64px' } }}
          />
          <Select
            variant="standard"
            disableUnderline
            value={query.language}
            onChange={event => {
              const newQuery = {
                ...query,
                language: event.target.value,
              }
              setQuery(newQuery)
              if (query.name?.length > 2) {
                runQuery(newQuery)
              }
            }}
            sx={{
              position: 'absolute',
              right: '8px',
              top: '12px',
              paddingLeft: '8px',
              borderLeft: '2px solid rgba(0, 0, 0, 0.23)',
            }}
          >
            <MenuItem value="fi">FI</MenuItem>
            <MenuItem value="en">EN</MenuItem>
          </Select>
        </Box>
      </Box>

      <Typography sx={{ m: 2 }}>
        Showing {potentialFeedbackTargets.length}/{count} results
      </Typography>

      {potentialFeedbackTargets.map(feedbackTarget => (
        <FeedbackTargetItem key={feedbackTarget.id} feedbackTarget={feedbackTarget} />
      ))}
    </Box>
  )
}

export default FeedbackTargetInspector
