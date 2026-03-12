import app from './api/index.js'
import routes from './routes/index.js'
import cors from 'cors'

app.use(cors({
    origin: '*',
    methods: ['GET','POST','PUT','DELETE','OPTIONS'],
    allowedHeaders: ['Content-Type','Authorization']
}))

app.use('/api', routes)
app.listen(3000, () => console.log('Server is Running...'))