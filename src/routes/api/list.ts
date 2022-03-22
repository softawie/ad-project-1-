import express from 'express';
import { Data } from '../../constants';

const list = express.Router();

list.get('/', (req, res) => {
  res.send(`${Data.toString()}`)
})

export default list;
