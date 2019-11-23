const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')


require('dotenv').config()

const app = express()
const port = process.env.PORT || 5000


app.use(cors())
app.use(express.json())

const uri = process.env.DB_URI
mongoose
  .connect(
    uri,
    // 'mongodb://localhost:27017/InnerWheel',
    { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true }
  )
  .then(() => {
    console.log(`connection to database established`)
  })
  .catch(err => {
    console.log(`db error ${err}`)
    process.exit(-1)
  })

const adopterFormRouter = require('./routes/adopterForm')
const suggestionFormRouter = require('./routes/suggestionForm')
const processRouter = require('./routes/processData')

app.use('/adopterFormData', adopterFormRouter)
app.use('/suggestionFormData',suggestionFormRouter)
app.use('/processData',processRouter)

app.listen(port, () => {
  console.log(`server is running on port ${port}`)
})
