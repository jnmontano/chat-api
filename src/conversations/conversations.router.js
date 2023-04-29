const router = require("express").Router();
const conversationServices = require("./conversations.services");

const passportJwt = require("../middlewares/auth.middleware");

//Creamos las rutas
router.route("/")
  .post(
    passportJwt.authenticate("jwt", { session: false }),
    conversationServices.postNewConversation
  );

//seccion importaciones
module.exports = router
