// node server.js

const express = require('express') 
const app = express()

app.use(logger)

app.get('/', (req, res) => {
  console.log('Home')
  res.send('Home Page')
})

app.get('/users', (req, res) => {
  console.log('Users')
  res.send('Users Page')
})

function logger(req, res, next) {
  console.log('Log')
  next()
}
