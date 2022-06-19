import express from 'express'
import { Images, List } from './api'
const routes = express.Router()

routes.get('/', (req, res) => {
  res.send(' Main Routes !')
})

routes.use('/thump', Images)
routes.use('/list', List)

export default routes
