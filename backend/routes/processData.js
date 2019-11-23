const router = require('express').Router()
let AdoptionProcessData = require('../models/processData.json')

// Get API

router.route('/').get((req,res)=>{
   res.json({AdoptionProcessData})
})

module.exports = router;