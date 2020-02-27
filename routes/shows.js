const router = require("express").Router();
const jsonParser = require("body-parser").json();
const showCtrl = require("../controllers/shows");

router.get("/", showCtrl.listShow);
router.get("/:id", showCtrl.getShow);
router.post("/", jsonParser, showCtrl.createShow);
router.patch("/:id", jsonParser, showCtrl.updateShow);
router.delete("/:id", showCtrl.deleteShow);

router.patch("/add-date/:id", jsonParser, showCtrl.addDate);
router.patch("/del-date/:id", jsonParser, showCtrl.delDate);
router.patch("/add-resa/:id", jsonParser, showCtrl.addResa);

module.exports = router;
