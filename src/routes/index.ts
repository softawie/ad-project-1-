import express from 'express'
import { Images, Second } from './api'
const routes = express.Router()

routes.get('/', (req, res) => {
  res.send('here is my Main Routes !')
})

routes.use('/images', Images)
routes.use('/Second', Second)

export default routes
