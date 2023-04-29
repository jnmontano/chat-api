const uuid = require('uuid')

const Conversations = require('../models/conversations.models')
const Users = require('../models/users.models')
const Participants = require('../models/participants.models')

// Funcion para crear la conversacion
const createConversation = async (conversationObj) => {

    //para el usuario invitado
    const userGuest = await Users.findOne({
        where: {
            id: conversationObj.guestId
        }
    })
    if(!userGuest) return false

    //crear una nueva conversacion
    const newConversations = await Conversations.create({
        id: uuid.v4(),
        name: conversationObj.name,
        profileImage: conversationObj.profileImage,
        isGroup: conversationObj.isGroup
    })

    //si es el modelador de la conversacion
    await Participants.create({
        id: uuid.v4(),
        userId: conversationObj.ownerId,
        conversationId: newConversations.id,
        isAdmin: true
    })

    //si no es el modelador de la conversacion
    await Participants.create({
        id: uuid.v4(),
        userId: conversationObj.guestId,
        conversationId: newConversations.id,
        isAdmin: false
    })
    return newConversations
}

module.exports = {
    createConversation
}
