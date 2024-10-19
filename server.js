import express from 'express'
import { ErrorHandler } from './ErrorHandler.js'
import { countryRouter } from './CountryRoutes.js'

const app = express()
const port = 3000

const errorHandler = new ErrorHandler()

app.get('/', (req, res) => {
  res.send('Made With ❤ In Sri Lanka')
})

app.use("/api/countries", countryRouter)

app.use(async (err, req, res, next) => {
  await errorHandler.handleError(err, res)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})