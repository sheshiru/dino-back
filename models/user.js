const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: String,
  password: String,
  email: String,
  phone: String,
  firstName: String,
  lastName: String,
  reservations: [
    {
<<<<<<< HEAD
      idDateShow: String,
=======
      idDate: String,
>>>>>>> dev-back-lastday2
      nbAdults: Number,
      nbchildren: Number
    }
  ]
});

const User = mongoose.model("user", userSchema);
module.exports = User;
