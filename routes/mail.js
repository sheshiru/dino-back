const router = require("express").Router();
const jsonParser = require("body-parser").json();
const mailCtrl = require("../controllers/mail");

router.post("/", jsonParser, mailCtrl.sendMail);//parse des données de la requete et appel de la méthode sendMail du controller concerné

module.exports = router;