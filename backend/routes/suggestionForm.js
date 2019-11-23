const router = require('express').Router()
let AdopterForm = require('../models/suggestionForm.model')

// Post API
router.post('/addData', (req, res) => {
  const name = req.body.name
  const email = req.body.email
  const remark = req.body.remark


  const newSuggestionForm = new AdopterForm({
    name,
    email,
    remark
  })

  newSuggestionForm
    .save()
    .then(() => res.json('Your Data is successfully submitted!!'))
    .catch(err => res.json('Error' + err))
})

module.exports = router