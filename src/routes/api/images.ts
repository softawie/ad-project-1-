import express from 'express';
import path from 'path';
import { Data } from '../../constants';
import { catchError } from '../../helper';

const Images = express.Router();

Images.get('/', (req, res) => {
  const fileName = req.query.fileName as string;
  const source = Data.includes(fileName);

  catchError({ res, fileName, source });

  res.sendFile(path.resolve('./') + `/images/${fileName}.jpg`);
})

export default Images;
