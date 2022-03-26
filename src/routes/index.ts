import express from 'express';
import { Images, List } from './api';
const routes = express.Router();

routes.get('/', (req, res) => {
  res.send('here is my Main Routes !')
})

routes.use('/thump', Images);
routes.use('/list/images', List);

export default routes;
