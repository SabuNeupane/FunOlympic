const mongoose = require("mongoose");

mongoose
  .connect("mongodb://127.0.0.1:27017/FunOlympic", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useCreateIndex:true
  })
  .then(() => {
    console.log(`connection successful`);
  })
  .catch((e) => {
    console.log(`no connection`);
  });

const newSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
});

const Videos = new mongoose.Schema({
  link: {
    type: String,
    required: false,
  },
  type: {
    type: String,
    required: false,
  },
});

const collection = mongoose.model("collection", newSchema);
const videos = mongoose.model("Videos", Videos);
module.exports = { collection, videos };
