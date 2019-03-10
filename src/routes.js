const express = require('express')

const routes = express.Router()

const PersonController = require('./app/controllers/PersonController')

routes.get('/person/:firstName', PersonController.show)
routes.get('/person', PersonController.index)
routes.post('/person', PersonController.store)
routes.put('/person/:id', PersonController.update)
routes.delete('/person/:id', PersonController.destroy)

module.exports = routes
