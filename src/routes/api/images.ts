import express from 'express';
import path from 'path';
import { Data } from '../../constants';
import { checkError ,resizeImages,cacheFiles } from '../../helper';

const Images = express.Router()

Images.get('/', async (req, res) => {
  try {
    const filename = req.query.filename as string;
    const width = req.query.width?.toString() as string;
    const height = req.query.height?.toString() as string;
  
    const source = Data.includes(filename);
  
    const input :string = path.resolve('./assets') + `/images/${filename}`
    const output :string= path.resolve('./assets') + `/thump/${width}x${height}-${filename}.jpg`

        // checkError({ res, filename, source });
        if( !cacheFiles(output) ){
          console.log('here is input ',input)
          return await resizeImages(input,output,width,height);
        }
        res.sendFile(output);
      } catch(err){
        console.log(err)
      }

  // res.sendFile();
  // resizeImages(input,output)
  


})

export default Images;
