import app from './api/index.js'
import routes from './routes/index.js'
import dotenv from 'dotenv'
dotenv.config()

const { PORT } = process.env

export default app