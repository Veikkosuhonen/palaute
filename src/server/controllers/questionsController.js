const { ApplicationError } = require('../util/customErrors')
const { Question } = require('../models')

const getAll = async (_, res) => {
  const questions = await Question.findAll()
  return res.send(questions)
}

const getOne = async (req, res) => {
  const question = await Question.findByPk(Number(req.params.id))
  if (!question) throw new ApplicationError('Not found', 404)

  return res.send(question)
}

const update = async (req, res) => {
  const question = await Question.findByPk(Number(req.params.id))
  if (!question) throw new ApplicationError('Not found', 404)

  question.data = req.body
  const updatedQuestion = await question.save()

  return res.send(updatedQuestion)
}

const destroy = async (req, res) => {
  const question = await Question.findByPk(Number(req.params.id))
  if (!question) throw new ApplicationError('Not found', 404)

  await question.destroy()

  return res.sendStatus(200)
}

module.exports = {
  getAll,
  getOne,
  update,
  destroy,
}
