const conversationControllers = require('./conversations.controllers')

//funcion para crear una nueva conversacion
const postNewConversation = (req, res) => {
    const conversationObj = req.body
    const ownerId = req.user.id 
    conversationControllers.createConversation({...conversationObj, ownerId})
        .then(data => {
            if(!data) {
                return res.status(404).json({message: 'Guest ID not exists'})
            }
            res.status(201).json(data)
        })
        .catch(err => {
            res.status(400).json({err: err.message})
        })
}



//Seccion importaciones
module.exports = {
    postNewConversation
}
