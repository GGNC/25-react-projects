const mongoose = require("mongoose");

mongoose.set("strictQuery", false);

mongoose
  .connect("mongodb+srv://gokhangenc:495Gnc,.@blog-app.rlqx5.mongodb.net/")
  .then(() => console.log("connected MongoDB"))
  .catch((e) => console.log(e));
