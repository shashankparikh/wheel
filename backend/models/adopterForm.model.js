const mongoose = require('mongoose')
const Schema = mongoose.Schema

const adopterFormSchema = new Schema(
  {
    name: {
      type: String,
      minLength: 1
    },
    gender: {
      type: String,
      minLength: 1
    },
    category: {
      type: String,
      minLength: 1
    },
    city: {
      type: String,
      minLength: 1
    },
    email: {
      type: String,
      minLength: 1
    },
    remark: {
      type: String,
      minLength: 1
    },
    age: {
      type: Number
    }
  },
  {
    timestamps: true
  }
)

const adopterForm = mongoose.model('AdopterForm', adopterFormSchema)

module.exports = adopterForm
