import path from 'path';

export function catchError({
  res,
  filename,
  source
}: {
  res: string | any
  filename: string
  source: boolean
}) {
  // const filename  = req.query.filename as string;
  // const source = Data.includes(filename);
  if (filename === undefined) {
    return res.sendFile(path.resolve('.src/utiles')+'/Error404.html');
  }
  if (source === false) {
    return res.status(500).send('no resourse req 500');
  }
}
