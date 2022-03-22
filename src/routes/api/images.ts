import express from 'express';
import path from 'path';
import { Data } from '../../constants';
import { catchError } from '../../helper';

const Images = express.Router()

Images.get('/', (req, res) => {
  const filename = req.query.filename as string;
  const source = Data.includes(filename);

  catchError({ res, filename, source });

  res.sendFile(path.resolve('./assets') + `/images/${filename}.jpg`);
})

export default Images;
