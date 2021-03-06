const mongoose = require("mongoose");

// Don't forget to set "MONGODB_URI" in ~/server/.env
const uri =
  process.env.MONGODB_URI ||
  `mongodb://localhost/please-set-process-env-mongodb-uri`;
mongoose.set("useFindAndModify", false);

mongoose
  .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(db => {
    console.log(
      `Connected to Mongo! Database name: "${db.connections[0].name}"`
    );
  })
  .catch(err => {
    console.error("Error connecting to mongo", err);
  });
