import { Router } from 'express'
import { infosActions, messagesActions } from '../controllers/index.js'

const routes = Router()

routes.get('/', (req, res) => {
    res.json({ message: 'Server is Running...' })
})
routes.patch('/infos/update', infosActions.updateGeneral)
routes.get('/infos', infosActions.getAll)
routes.post('/infos/init', infosActions.create)

routes.get('/messages', messagesActions.getAll)
routes.post('/messages/send', messagesActions.sendMessage)

export default routes