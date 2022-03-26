import path from 'path';
import fs from 'fs';
import sharp from 'sharp';


export const checkError = async ({
  res,
  filename,
  source
}: {
  res: string | any
  filename: string
  source: boolean
})  => {
  // const filename  = req.query.filename as string;
  // const source = Data.includes(filename);

  if (filename === undefined) {
    let output = path.resolve('./assets') + `/thump/${filename}.jpg`

    return await sharp(filename)
    .resize(300, 200)
    .toFile(output);
    // res.sendFile(path.resolve('.src/utiles')+'/Error404.html');
  }
  if (source === false) {
    return res.status(500).send('no resourse req 500');
  }
}

export const resizeImages = async (input: string,output: string,width:string,height:string) => {
  console.log('here is input !!!!!',input)
    try{   
      return await sharp(input)
      .resize(parseInt(width), parseInt(height))
      .toFile(output);
    }catch(err){
      console.log(err)
    }

    }




export const  cacheFiles = (output:string) =>{
  return fs.existsSync(output);
}