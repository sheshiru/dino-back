const router = require("express").Router();
const Show = require("../models/show");
const jsonParser = require("body-parser").json();

router.get("/", async (req, res) => {
    try {
        let shows;
        let query = {}
        if (req.query) {
            for (let i in req.query) {
                regex = new RegExp(req.query[i])
                query[i] = { $regex: regex, $options: 'i' }
            }
            shows = await Show.find(query, 'title');
        } else {
            shows = await Show.find();
        }
        res.json(shows);
    } catch (err) { throw err }

});
router.get("/:id", (req, res) => {
  Show.findOne({ _id: req.params.id })
    .then(shows => res.status(200).json(shows))
    .catch(error => console.log(error));
});
router.post("/", jsonParser, (req, res) => {
  let show = new Show(req.body);
  show.save();
  res.status(200).json(show);
});
router.patch("/:id", jsonParser, (req, res) => {
  Show.findOneAndUpdate({ _id: req.params.id }, req.body)
    .then(shows => res.status(200).json(shows))
    .catch(error => console.log(error));
});
router.delete("/:id", (req, res) => {
  Show.findOneAndDelete({ _id: req.params.id })
    .then(shows => res.status(200).json(shows))
    .catch(error => console.log(error));
});

module.exports = router;
