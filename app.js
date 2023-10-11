const express = require('express')
const request = require('request')
const app = express()

app.get('/proxy/aws/claude', (req, res) = {
  request.get('https://hopeman-claude.hf.space/proxy/aws/claude', (err, response) = {
    res.status(response.statusCode)
    res.send(response.body)
  })
})

app.get('/', (req, res) = {
  res.sendFile(__dirname + '/index.html')
})

app.listen(7860)
