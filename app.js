import app from './api/index.js'
import routes from './routes/index.js'
import dotenv from 'dotenv'
dotenv.config()
app.use(routes)
const { PORT } = process.env

app.listen(PORT, () => console.log('Server is Running...'))
