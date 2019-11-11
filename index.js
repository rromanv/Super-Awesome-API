import express from 'express'
import indexRouter from './src/routes/index'
import apiRouter from './src/routes/api'

const app = express()
const port = 3000

app.use('/', indexRouter)
app.use('/api', apiRouter)

app.listen(port, () => console.log(`App listening on port ${port}!`))