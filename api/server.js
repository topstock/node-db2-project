const express = require('express')

const carsRouter = require('./cars/cars-router')

const server = express()
// DO YOUR MAGIC
server.use(express.json())

server.use('/api/cars', carsRouter)

server.get('*', (req, res) => {
  res.json({ status: 404, message: "No resources at this location" })
})

server.use('*', (err, req, res, next) => {
  res.json({ status: err.status, message: err.message })
})

module.exports = server
