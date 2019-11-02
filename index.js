import express from 'express'
import indexRouter from './src/routes/index'

const app = express()
const port = 3000

app.use('/', indexRouter)

app.listen(port, () => console.log(`Example app listening on port ${port}!`))