const router = require("express").Router();
const jsonParser = require("body-parser").json();
const showCtrl = require("../controllers/users");

router.get("/", showCtrl.listUser);
router.get("/:id", showCtrl.getUser);
router.post("/", jsonParser, showCtrl.createUser);
router.patch("/:id", jsonParser, showCtrl.updateUser);
router.delete("/:id", showCtrl.deleteUser);
router.patch("/add-resa/:id", jsonParser, showCtrl.addResa);

module.exports = router;
