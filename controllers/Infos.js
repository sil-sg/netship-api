import { Infos } from '../models/index.js'

class infos {
    async getAll(req, res) {
        try {
            const data = await Infos.find()
            if (!data) return res.status(400).json({ message: 'failed' })
            res.status(200).json({ message: 'sucess', content: data })
        } catch(e) { 
            console.log(e)
            res.status(400).json({ message: 'failed' })
        }
    }
    async updateGeneral(req, res) {
        try {
            const { id } = req.params
            const newData = req.body
            
            if (id && newData) {
                const data = await Infos.findByIdAndUpdate(id, newData, { new: true })
                if (!data) return res.status(400).json({ message: 'failed' })
                res.status(200).json({ message: 'sucess', content: data })
            } else {
                res.status(400).json({ message: 'failed' })
            }
            
        } catch(e) { 
            console.log(e)
            res.status(400).json({ message: 'failed' })
        }
    }
    async create(req, res) {
        try {
            const newData = req.body
            if (!newData) return res.status(400).json({ message: 'data not found' })
            
            const data = await Infos.create(newData)
            if (!data) return res.status(400).json({ message: 'failed to create' })
            res.status(200).json({ message: 'sucess', content: data })
        } catch(e) { 
            console.log(e)
            res.status(400).json({ message: 'failed' })
        }
    }
}

export const infosActions = new infos