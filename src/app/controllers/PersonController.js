const Person = require('../models/Person')

class PersonController {
  async show (req, res) {
    const { firstName } = req.params

    const people = await Person.find({ firstName })

    return res.json(people)
  }

  async index (req, res) {
    const people = await Person.find()

    return res.json(people)
  }

  async store (req, res) {
    const person = await Person.create(req.body)

    return res.json(person)
  }

  async update (req, res) {
    const { id } = req.params

    const person = await Person.findByIdAndUpdate(id, req.body, {
      new: true
    })

    return res.json(person)
  }

  async destroy (req, res) {
    const { id } = req.params
    await Person.findByIdAndDelete(id)

    return res.send()
  }
}

module.exports = new PersonController()
