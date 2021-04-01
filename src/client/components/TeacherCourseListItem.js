import React from 'react'
import { useHistory } from 'react-router-dom'
import { Box, Button } from '@material-ui/core'

const TeacherCourseListItem = ({ course }) => {
  const history = useHistory()

  const handleEditButton = () => {
    history.push(`/modify/${course.id}`)
  }

  const handleViewButton = () => {
    history.push(`/view/${course.id}`)
  }

  return (
    <Box maxWidth="md" border={2} borderRadius={10} m={2} padding={2}>
      <h4>{course.name.fi}</h4>
      <Button variant="contained" color="primary" onClick={handleEditButton}>
        Muokkaa lomaketta
      </Button>
      <Button variant="contained" color="primary" onClick={handleViewButton}>
        Katso palautteen yhteenveto
      </Button>
    </Box>
  )
}

export default TeacherCourseListItem
