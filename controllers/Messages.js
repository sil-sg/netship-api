import { Messages } from '../models/index.js'

class messages {
    async getAll(req, res) {
        try {
            const data = await Messages.find()
            if (!data) return res.status(400).json({ message: 'failed' })
            res.status(200).json({ message: 'sucess', content: data })
        } catch (e) { 
            console.error(e)
            res.status(400).json({ message: 'failed' })
        }
    }
    async sendMessage(req, res) {
        try {
            const newData = req.body
            if (!newData) return res.status(400).json({ message: 'data not found' })
            
            const data = await Messages.create(newData)
            if (!data) return res.status(400).json({ message: 'failed to create' })
            res.status(200).json({ message: 'sucess', content: data._id })
            console.log({ message: 'sucess', content: data, id: data._id })
        } catch (e) { 
            console.error(e)
            res.status(400).json({ message: 'failed' })
        }
    }
    async getResponse() {
        try {
            
        } catch (e) {
            console.error(e)
            res.status(400).json({ message: 'failed' })
        }
    }
    
}

export const messagesActions = new messages