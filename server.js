require("dotenv").config();
require("./config/db.connection"); // database initial setup
const express = require("express");
const app = express();
const cors = require("cors");
const cookieParser = require("cookie-parser");
// Set "Access-Control-Allow-Origin" header
const corsOptions = {
  origin: [process.env.frontURL],
  credentials: true,
  optionsSuccessStatus: 200
};

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors(corsOptions));
// For any routes that starts with "/api", catch 404 and forward to error handler
app.use("/api/*", (req, res, next) => {
  let err = new Error("Not Found");
  err.status = 404;
  next(err);
});

const usersRouter = require("./routes/users");
app.use("/users", usersRouter);

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
