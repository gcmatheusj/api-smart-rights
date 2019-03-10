const mongoose = require('mongoose')

const PersonSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true
  },
  secondName: {
    type: String,
    required: true
  },
  birthday: {
    type: Date,
    required: true
  },
  phones: [
    {
      phoneName: {
        type: String,
        required: true
      },
      phoneNumber: {
        type: Number,
        required: true
      }
    }
  ]
})

module.exports = mongoose.model('Person', PersonSchema)
