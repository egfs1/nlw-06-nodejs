import express from 'express'
import "express-async-errors"
import errorRouter from './errors'
import router from './routes'

const app = express()

app.use(express.json())
app.use(router)
app.use(errorRouter)

const port = process.env.PORT || 3000
app.listen(port, ()=> console.log(`Server is Running on port ${port}!`))