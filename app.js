import app from './api/index.js'
import routes from './routes/index.js'
import cors from 'cors'
import dotenv from 'dotenv'
dotenv.config()

const { PORT } = process.env

app.use(cors())

app.use('/api', routes)
app.listen(PORT, () => console.log('Server is Running...'))

// {
//     origin: '*',
//     methods: ['GET','POST','PUT','DELETE','OPTIONS'],
//     allowedHeaders: ['Content-Type','Authorization']
// }