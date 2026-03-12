import express from 'express'
import { start } from '../config/db.js'

const app = express()
app.use(express.json())

start()

export default app