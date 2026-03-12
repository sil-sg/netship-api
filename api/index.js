import express from 'express'
import { start } from '../config/db.js'
import cors from 'cors

const app = express()
app.use(cors())
app.use(express.json())

start()

export default app
