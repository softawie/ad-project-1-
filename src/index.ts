import express from 'express'
import routes from './routes'
import logger from './utiles/logger'

export const app = express()

// for Route with middleware logger
app.use('/',logger, routes)

// using express in server
const port = 3000

app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`)
})
