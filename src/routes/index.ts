import express from 'express';
import { Images, List } from './api';
const routes = express.Router();

routes.get('/', (req, res) => {
  res.send('here is my Main Routes !')
})

routes.use('/api/images', Images);
routes.use('/images', List);

export default routes;
