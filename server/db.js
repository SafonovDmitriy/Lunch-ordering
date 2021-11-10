const mongoose = require("mongoose");

const conectToDataBase = ({ startServer }) => {
  mongoose
    .connect(process.env.DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
    })
    .then((db) => {
      console.log(`db`, db.connection.host);
      startServer();
    })
    .catch((error) => {
      console.log(`errorConnect`, error);
    });
};
module.exports = conectToDataBase;
