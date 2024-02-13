const { Router } = require('express')
const { Op } = require('sequelize')
const _ = require('lodash')

const { UserFeedbackTarget, FeedbackTarget, CourseRealisation, CourseUnit, Organisation, Tag } = require('../../models')

const { sequelize } = require('../../db/dbConnection')
const { INCLUDE_COURSES } = require('../../util/config')

const getCourseUnitsForTeacher = async (req, res) => {
  const { params, user } = req

  const courseUnits = await CourseUnit.findAll({
    attributes: ['id', 'name', 'courseCode', 'userCreated'],
    include: [
      {
        model: Organisation,
        as: 'organisations',
        required: true,
        attributes: ['disabledCourseCodes'],
      },
      {
        model: FeedbackTarget,
        as: 'feedbackTargets',
        required: true,
        attributes: [
          'id',
          'name',
          'opensAt',
          'closesAt',
          ['feedback_response_email_sent', 'feedbackResponseSent'],
          [sequelize.literal(`length(feedback_response) > 3`), 'feedbackResponseGiven'],
          'feedbackCount',
          'continuousFeedbackEnabled',
          'userCreated',
          'courseRealisationId',
        ],
        where: {
          feedbackType: 'courseRealisation',
        },
        include: [
          {
            model: UserFeedbackTarget,
            as: 'userFeedbackTargets',
            required: true,
            where: {
              userId: user.id,
              accessStatus: { [Op.in]: ['RESPONSIBLE_TEACHER', 'TEACHER'] },
            },
          },
          {
            model: CourseRealisation,
            as: 'courseRealisation',
            required: true,
            attributes: ['id', 'name', 'startDate', 'endDate', 'userCreated'],
          },
        ],
      },
    ],
  })

  const acualCUs = courseUnits.map(courseUnit => {
    const courseRealisations = courseUnit.feedbackTargets.map(feedbackTarget => feedbackTarget.courseRealisation)

    const feedbackTargets = _.groupBy(courseUnit.feedbackTargets, 'courseRealisationId')

    const disabledCourse = courseUnit.organisations.some(org => org.disabledCourseCodes.includes(courseUnit.courseCode))

    return {
      ...courseUnit.dataValues,
      disabledCourse,
      courseRealisations: courseRealisations.map(courseRealisation => {
        const acualCUR = courseRealisation.toJSON()
        const acualFBTs = feedbackTargets[courseRealisation.id].map(feedbackTarget => feedbackTarget.toJSON())
        acualCUR.feedbackTargets = acualFBTs

        return acualCUR
      }),
    }
  })

  res.send(acualCUs)
}

const router = Router()

router.get('/courses', getCourseUnitsForTeacher)

module.exports = router
