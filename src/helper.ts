export function catchError({
  res,
  fileName,
  source
}: {
  res: string | any
  fileName: string
  source: boolean
}) {
  // const fileName  = req.query.fileName as string;
  // const source = Data.includes(fileName);
  if (fileName === undefined) {
    return res.status(400).send('bad req 400')
  }
  if (source === false) {
    return res.status(500).send('no resourse req 500')
  }
}
