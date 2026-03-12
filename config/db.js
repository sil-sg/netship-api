import mongoose from 'mongoose'
import dotenv from 'dotenv'

let connected = false

export const start = async () => {
    dotenv.config()
    mongoose.set('strictQuery', true)
    const { MONGO_URL } = process.env
    try {
        if (connected === false) {
            await mongoose.connect(MONGO_URL)
            connected = true
            console.log('Connected in MongoDB!')
        }
    } catch (e) {
        console.error(e)
    } finally {
        if (connected === false) {
            start()
        }
    }
}