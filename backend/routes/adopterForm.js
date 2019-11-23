const router = require('express').Router()
let AdopterForm = require('../models/adopterForm.model')


// Post API
router.post('/addData', (req, res) => {
  const name = req.body.name
  const gender = req.body.gender
  const category = req.body.category
  const city = req.body.city
  const email = req.body.email
  const remark = req.body.remark
  const age = Number(req.body.age)

  const newAdopterForm = new AdopterForm({
    name,
    gender,
    category,
    city,
    email,
    remark,
    age
  })

  newAdopterForm
    .save()
    .then(() => res.json('Your Data is successfully submitted!!'))
    .catch(err => res.json('Error' + err))
})

module.exports = router
