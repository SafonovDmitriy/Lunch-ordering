require("dotenv").config();
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const router = require("./routes");
const conectToDataBase = require("./db");
const app = express();

const port = process.env.PORT;
const corsConfig = {
  origin: true,
  credentials: true,
};
app.use(cors(corsConfig));
app.use(cookieParser());
app.use(express.json());

app.use("/api", router);

const start = () => {
  try {
    conectToDataBase();

    app.listen(port, () => {
      console.log("We are live on " + port);
    });
  } catch (error) {
    console.log(error);
  }
};
start();
