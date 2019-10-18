console.log('loaded server.js')

const express = require('express')
const app = express()
const path = require('path')

const port = 3000

let playerData = []

app.get('/', (req, res) => {
  app.use(express.static('public'))
})

app.listen(port, () => {
  console.log('Listening on port: ' + port)
})

app.get('/player', (req, res) => {
  console.log('INFO: ', req.params)
  // res.sendFile(__dirname + '/public/main.js')
})
