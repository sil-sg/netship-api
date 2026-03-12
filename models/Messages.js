import { Schema, model } from 'mongoose'

const messagesSchema = new Schema({
    content: {type: String, required: true},
    senderId: {type: String},
    senderName: {type: String, required: true},
    senderContact: {type: String, required: true},
    serviceSelected: {type: String},
    visualized: {type: Boolean, default: false},
    createAt: {type: String, default: new Date().toLocaleString('pt-AO')},
    response: {type: Array, default: []}
})

export const Messages = model('messages', messagesSchema)