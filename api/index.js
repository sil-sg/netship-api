import express from 'express'
import { start } from '../config/db.js'
import routes from './routes/index.js'
import cors from 'cors
import dotenv from 'dotenv'
dotenv.config()

const app = express()
app.use(routes)
app.use(cors())
app.use(express.json())

start()

const { PORT } = process.env

app.listen(PORT, () => console.log('Server is Running...'))
