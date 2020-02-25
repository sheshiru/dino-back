require("dotenv").config();
require("./config/db.connection"); // database initial setup

const express = require("express");
const app = express();
const cors = require("cors");
// const cookieParser = require("cookie-parser");
// Set "Access-Control-Allow-Origin" header
const corsOptions = {
  origin: 'http://localhost:4200'
};
app.use(cors(corsOptions));

// app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const usersRouter = require("./routes/users");
app.use("/users", usersRouter);

const showsRouter = require("./routes/shows");
app.use("/shows", showsRouter);

const mailRouter = require("./routes/mail");
app.use("/contact", mailRouter);

//404 ERROR FUNCTION
app.use((req, res, next) => {
  res
    .status(404)
    .send("This route does not exists! Check if everything is ok!");
});

//500 ERROR FUNCTION
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

// Error handler
app.use((err, req, res, next) => {
  console.error("----- An error happened -----");
  console.error(err);

  // only render if the error ocurred before sending the response
  if (!res.headersSent) {
    res.status(err.status || 500);

    // A limited amount of information sent in production
    if (process.env.NODE_ENV === "production") res.json(err);
    else
      res.json(
        JSON.parse(JSON.stringify(err, Object.getOwnPropertyNames(err)))
      );
  }
});


app.listen(process.env.PORT || 8080, () => {
  console.log(`App started at ${process.env.SITE_URL}`);
});
