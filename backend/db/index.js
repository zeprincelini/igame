const mongoose = require("mongoose");

const db = async () => {
  try {
    await mongoose.connect(process.env.DB_URL, {
      useNewUrlParser: true,
      //useFindAndModify: false,
      useUnifiedTopology: true,
    });
    console.log("connected successfully");
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

module.exports = db;
