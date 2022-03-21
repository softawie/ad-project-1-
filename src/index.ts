import express from 'express'
import routes from './routes'

const app = express()

// for Route
app.use('/', routes)

// using express in server
const port = 3000

app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`)
})
