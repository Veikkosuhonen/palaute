const Router = require('express')
const _ = require('lodash-es')
const morgan = require('morgan')

const { FeedbackTarget, CourseRealisation, User } = require('../models')

const { ApplicationError } = require('../util/customErrors')
const { initTestSummary } = require('./seedSummary')
const { seedFeedbackTargetsForTeacher } = require('./seedFeedbackTargets')
const { seedDb, seedUsers, seedOrganisationCorrespondent } = require('./seed')
const { TEST_COURSE_REALISATION_ID } = require('./testIds')
const { inProduction } = require('../util/config')
const { getUniversitySurvey } = require('../services/surveys')

const updateCourseRealisation = async (req, res) => {
  const { feedbackTargetId } = req.params

  const feedbackTarget = await FeedbackTarget.findByPk(Number(feedbackTargetId))

  if (!feedbackTarget) ApplicationError.NotFound(`FBT ${feedbackTargetId} not found`)

  const courseRealisation = await CourseRealisation.findByPk(feedbackTarget.courseRealisationId)

  if (!courseRealisation) ApplicationError.NotFound(`Course realisation ${courseRealisation.id} not found`)

  const updates = _.pick(req.body, ['startDate', 'endDate'])

  Object.assign(courseRealisation, updates)

  await courseRealisation.save()

  const { feedbackResponse, feedbackResponseEmailSent } = req.body

  let feedbackCount = Number(req.body?.feedbackCount)
  feedbackCount = Number.isNaN(feedbackCount) ? feedbackTarget.feedbackCount : feedbackCount

  Object.assign(feedbackTarget, {
    feedbackCount,
    opensAt: updates.startDate,
    closesAt: updates.endDate,
    feedbackResponse,
    feedbackResponseEmailSent,
  })

  await feedbackTarget.save()

  return res.sendStatus(200)
}

const updateManyCourseRealisations = async (req, res) => {
  const { user } = req

  if (!user) throw new ApplicationError('No user found', 404)

  const { feedbackTargetIds } = _.pick(req.body, ['feedbackTargetIds'])

  const updates = _.pick(req.body, ['startDate', 'endDate'])

  /* eslint-disable */
  for (const id of feedbackTargetIds) {
    const feedbackTarget = await FeedbackTarget.findByPk(Number(id))
    if (!feedbackTarget) ApplicationError.NotFound(`FBT ${id} not found`)

    const courseRealisation = await CourseRealisation.findByPk(feedbackTarget.courseRealisationId)
    if (!courseRealisation) ApplicationError.NotFound(`CUR ${feedbackTarget.courseRealisationId} not found`)

    Object.assign(courseRealisation, updates)

    await courseRealisation.save()
  }
  /* eslint-enable */

  return res.send(200)
}

const updateUser = async (req, res) => {
  const { userId } = req.params

  const user = await User.findByPk(userId)

  if (!user) throw new ApplicationError('User not found', 404)

  const updates = _.pick(req.body, ['employeeNumber', 'studentNumber', 'username'])

  Object.assign(user, updates)

  await user.save()

  return res.send(200)
}

const initSummary = async (req, res) => {
  await initTestSummary({ user: _.pick(req.body, ['hyPersonSisuId', 'uid']) })
  return res.send(200)
}

const userHeadersToUser = userHeaders => ({
  id: userHeaders.hyPersonSisuId,
  username: userHeaders.uid,
  firstName: userHeaders.givenname,
  lastName: userHeaders.sn,
  email: userHeaders.mail,
  employeeNumber: userHeaders.employeeNumber,
  studentNumber: userHeaders.studentNumber,
})

const seedTestUsers2 = async (req, res) => {
  const users = req.body.map(userHeadersToUser)
  await seedUsers(users)
  return res.send(201)
}

const seedOrganisationCorrespondentHandler = async (req, res) => {
  const user = userHeadersToUser(req.body.user)
  await seedOrganisationCorrespondent(user)
  return res.send(200)
}

const seedFeedbackTargets = async (req, res) => {
  const { teacher, student, opensAt, closesAt, extraStudents } = req.body
  const fbts = await seedFeedbackTargetsForTeacher({
    teacher: userHeadersToUser(teacher),
    student: userHeadersToUser(student),
    opensAt,
    closesAt,
    extraStudents,
  })
  return res.send(fbts)
}

const resetDb = async (req, res) => {
  await seedDb()
  return res.send(204)
}

const getTestFbtId = async (req, res) => {
  const fbt = await FeedbackTarget.findOne({
    where: {
      courseRealisationId: TEST_COURSE_REALISATION_ID,
    },
  })

  return res.send({ id: fbt.id })
}

const getUniversityQuestions = async (req, res) => {
  const srv = await getUniversitySurvey()
  return res.send(srv.questions)
}

const router = Router()

// A double safeguard against running test routes in production. This should never happen.
router.use((_, __, next) => {
  if (inProduction) {
    throw new ApplicationError('Test router called in production.', 500)
  }
  next()
})

router.use(Router.json())
router.use(morgan('dev'))

router.put('/user/:userId', updateUser)

router.put('/courseRealisation/:feedbackTargetId', updateCourseRealisation)
router.put('/courseRealisations', updateManyCourseRealisations)

router.post('/init-summary', initSummary)
router.post('/seed-users', seedTestUsers2)
router.post('/seed-feedback-targets', seedFeedbackTargets)
router.post('/seed-organisation-correspondent', seedOrganisationCorrespondentHandler)
router.post('/reset-db', resetDb)

router.get('/test-fbt-id', getTestFbtId)
router.get('/university-questions', getUniversityQuestions)

module.exports = router
