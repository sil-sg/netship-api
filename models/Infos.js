import { Schema, model } from 'mongoose'

const infosSchema = new Schema({
    textMainBanner: {
        type: String,
        required: true,
        default: 'Inovando o Futuro Digital de Angola'
    },
    bannerDescription: {
        type: String,
        required: true,
        default: 'Criado por jovens, desenvolvedores de soluções digitais para o progresso Angola'
    },
    themeDark: {
        type: Boolean,
        required: true,
        default: true
    },
    colorTheme: {
        type: String,
    },
    aboutTitle: {
        type: String,
        default: 'Quem somos',
        required: true,
    },
    aboutTitle2: {
        type: String,
        required: true,
        default: 'Jovens para o desenvolvimento de Angola!',
    },
    aboutContent: {
        type: String,
        required: true,
        default: 'Somos uma Startup focada na criação de soluções digitais inovadoras para impulsionar o crescimento de Angola'
    },
    
    servicesTitle: {
        type: String,
        required: true,
        default: 'Nossos Serviços',
    },
    servicesTitle2: {
        type: String,
        required: true,
        default: 'Jovens para o desenvolvimento de Angola!',
    }
})

export const Infos = model('infos', infosSchema)