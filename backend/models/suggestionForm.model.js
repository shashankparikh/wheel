const mongoose = require('mongoose')
const Schema = mongoose.Schema

const suggestionFormSchema = new Schema(
  {
    name: {
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
    }
  },
  {
    timestamps: true
  }
)

const suggestionForm = mongoose.model('SuggestionForm', suggestionFormSchema)

module.exports = suggestionForm
