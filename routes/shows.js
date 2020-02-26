const router = require("express").Router();
// const Show = require("../models/show");
const jsonParser = require("body-parser").json();
const showCtrl = require("../controllers/shows");

router.get("/", showCtrl.listShow);
router.get("/:id", showCtrl.getShow);
router.post("/", jsonParser, showCtrl.createShow);
router.patch("/:id", jsonParser, showCtrl.updateShow);
router.patch("/add-date/:id", jsonParser, showCtrl.addDate);
router.delete("/:id", showCtrl.deleteShow);

module.exports = router;
