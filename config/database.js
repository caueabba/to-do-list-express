const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

mongoose
  .connect("mongodb://localhost:27017/todo-list")
  .then(() => console.log("Conectado ao MongoDB"))
  .catch((err) => console.error(err));
