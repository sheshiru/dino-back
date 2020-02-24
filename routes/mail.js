const router = require("express").Router();
const jsonParser = require("body-parser").json();
const mailCtrl = require("../controllers/mail")
router.post("/", jsonParser, mailCtrl.sendMail);

module.exports = router;