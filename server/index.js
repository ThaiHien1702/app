const express = require('express')
const cors = require('cors')
const app = express()
const db = require('./configDb/connect')
const post = require('./routes/post')

const port = 4000

db.connect()
app.use(express.json())
app.use(cors())
app.use('/', post)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})