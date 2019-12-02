import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import indexRouter from './src/routes/index'
import apiRouter from './src/routes/api'

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())
app.use(cors({
  origin: process.env.ORIGIN
}))
app.use(morgan('combined'))

app.use('/', indexRouter)
app.use('/api', apiRouter)

app.listen(port, () => console.log(`App listening on port ${port}!`))