import express from 'express'
import { ErrorHandler } from './ErrorHandler.js'
import { countryRouter } from './CountryRoutes.js'

const host = 'http://localhost'
const port = 3000

const app = express()

const errorHandler = new ErrorHandler()

app.get('/', (req, res) => {
  res.send('Made With ❤ In Sri Lanka')
})

app.use("/api/countries", countryRouter)

app.use(async (err, req, res, next) => {
  await errorHandler.handleError(err, res)
})

app.listen(port, () => {
  console.log(`listening on port ${host}:${port}`)
})