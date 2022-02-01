const { QueryTypes } = require('sequelize')
const { CourseUnit, Survey, Feedback } = require('../models')
const { sequelize } = require('./dbConnection')

const getOpenFeedbackByOrganisation = async (code) => {
  const universitySurvey = await Survey.findOne({
    where: { type: 'university' },
  })
  const programmeSurvey = await Survey.findOne({
    where: { type: 'programme', typeId: code },
  })

  await universitySurvey.populateQuestions()

  if (programmeSurvey) await programmeSurvey.populateQuestions()
  const programmeQuestions = programmeSurvey ? programmeSurvey.questions : []

  const questions = [
    ...universitySurvey.questions,
    ...programmeQuestions,
  ].filter((q) => q.type === 'OPEN')

  const courseCodes = await sequelize.query(
    `SELECT DISTINCT ON (C.course_code) C.course_code, C.name FROM course_units C, course_units_organisations CO, organisations O 
    WHERE C.id = CO.course_unit_id AND CO.organisation_id = O.id AND O.code = :code`,
    {
      replacements: { code },
      type: QueryTypes.SELECT,
      mapToModel: true,
      model: CourseUnit,
    },
  )

  const allFeedbacks = await sequelize.query(
    `SELECT DISTINCT ON (F.id) F.*, C.course_code FROM feedbacks F, user_feedback_targets UFT, feedback_targets FT, course_units C 
    WHERE F.id = UFT.feedback_id AND UFT.feedback_target_id = FT.id AND FT.course_unit_id = C.id AND C.course_code IN (:codes)`,
    {
      replacements: {
        codes: courseCodes.map(({ courseCode }) => courseCode),
      },
      mapToModel: true,
      model: Feedback,
    },
  )

  const feedbacksByCourseCode = {}

  allFeedbacks.forEach((feedback) => {
    const code = feedback.dataValues.course_code

    if (feedbacksByCourseCode[code]) {
      feedbacksByCourseCode[code].push(feedback)
    } else {
      feedbacksByCourseCode[code] = [feedback]
    }
  })

  const codesWithIds = courseCodes.map(({ courseCode, name }) => {
    const feedbacks = feedbacksByCourseCode[courseCode] || []
    const allFeedbacksWithId = feedbacks
      .map((feedback) => feedback.dataValues.data)
      .flat()

    const questionsWithResponses = questions.map((question) => ({
      question,
      responses: allFeedbacksWithId
        .filter((feedback) => feedback.questionId === question.id)
        .map((feedback) => feedback.data),
    }))

    return {
      code: courseCode,
      name,
      questions: questionsWithResponses,
    }
  })

  return codesWithIds
}

module.exports = {
  getOpenFeedbackByOrganisation,
}
