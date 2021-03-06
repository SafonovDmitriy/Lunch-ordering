require("dotenv").config();
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const router = require("./routes");
const conectToDataBase = require("./db");
const passport = require("passport");
const app = express();

const port = process.env.PORT || 5000;
const corsConfig = {
  origin: true,
  credentials: true,
};

require("./config/passport-setup")(passport);
app.use(passport.initialize());

app.use(cors(corsConfig));
app.use(cookieParser());
app.use(express.json());

app.use("/img", express.static("img"));

app.use("/api", router);

const startServer = () =>
  app.listen(port, () => {
    console.log("We are live on " + port);
  });

try {
  conectToDataBase({ startServer });
} catch (error) {
  console.log(error);
}
