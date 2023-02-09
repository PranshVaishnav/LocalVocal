const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://admin:" +
      process.env.MONGO_ATLAS_PW +
      "@cluster0.ddtdwjv.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() =>
    console.log(
      "******************************" +
        "Mongodb Connected" +
        "******************************"
    )
  )
  .catch((err) => console.log("Error: " + err));

var db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));
