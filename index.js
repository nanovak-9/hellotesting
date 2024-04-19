const express = require('express')
const dotenv = require('dotenv')
const app = express()

dotenv.config()

app.get('/', (req, res) => {
  const name = process.env.NAME || 'World'
  res.send(`${name}! This change is coming from development :O`)
})

const port = parseInt(process.env.PORT) || 8080
app.listen(port, () => {
  console.log(`helloworld: listening on port ${port}`)
})
