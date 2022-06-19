import express from 'express'
import { resize } from '../../utiles/helper'

const Images = express.Router()

Images.get('/images', resize, async (req, res) => {
  res.send('file name got !')
  // res.sendFile();
  // resizeImages(input,output)
})

export default Images
