import path from 'path'
import fs from 'fs'
import sharp from 'sharp'
import express from 'express'

export const cacheFiles = (output: string) => {
  return fs.existsSync(output)
}

export const resize = async (req: express.Request, res: express.Response) => {
  const filename = req.query.filename
  const w: number = Number(req.query.width)
  const h: number = Number(req.query.height)
  const newPath = __dirname + '../../../assets/thump/'

  const imagePath: string = path.normalize(newPath + filename + '-' + w + '-' + h + '.jpg')
  console.log(imagePath)

  const orgPath = __dirname + '../../../assets/images/'

  const originaImage: string = path.normalize(orgPath + filename)

  // case no image name cached
  if (!cacheFiles(originaImage)) {
    res.status(400).send('pls insert existing name !')
    // case imagepath exist
  } else if (!cacheFiles(imagePath)) {
    res.status(200).send(imagePath)
    // case no image name
  } else if (filename === undefined) {
    res.status(404).send('this name is undefined !')
    // case image name exist
  } else if (filename !== null) {
    resizeImages(filename as string, w as unknown as number, h as unknown as number)
    await setTimeout(() => {
      return res.status(200).sendFile(imagePath)
    }, 1000)
  } else return
}

export const resizeImages = async (filename: string, w: number, h: number) => {
  const input = './assets/images/' + filename
  const output = './assets/thump/' + filename
  console.log('here is input !!!!!', input)
  if (w && h) {
    return await sharp(input)
      // .resize(parseInt(width), parseInt(height))
      .resize(w, h)
      .toFile(output + '-' + w + '-' + h + '.jpg')
    // case no image width or height
  } else
    return await sharp(input)
      // .resize(parseInt(width), parseInt(height))
      .resize(250, 250)
      .toFile(output + '-' + 250 + '-' + 250 + '.jpg')
}
