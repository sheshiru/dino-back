const router = require("express").Router();
const User = require("../models/user");
const jsonParser = require("body-parser").json();

router.get("/", async (req, res) => {
  try {
    let users;
    let query = {};
    if (req.query) {
      for (let i in req.query) {
        regex = new RegExp(req.query[i]);
        query[i] = { $regex: regex, $options: "i" };
      }
      users = await User.find(query);
    } else {
      users = await User.find();
    }
    res.json(users);
  } catch (err) {
    throw err;
  }
});
router.get("/:id", (req, res) => {
  User.findOne({ _id: req.params.id })
    .then(users => res.status(200).json(users))
    .catch(error => console.log(error));
});
router.post("/", jsonParser, (req, res) => {
  let user = new User(req.body);
  user.save();
  res.status(200).json(user);
});
router.patch("/:id", jsonParser, (req, res) => {
  User.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
    .then(users => res.status(200).json(users))
    .catch(error => console.log(error));
});
router.delete("/:id", (req, res) => {
  User.findOneAndDelete({ _id: req.params.id })
    .then(users => res.status(200).json(users))
    .catch(error => console.log(error));
});

module.exports = router;
