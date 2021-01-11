const mongoose = require("mongoose");

const uri = process.env.MONGO_URI;

const connectDB = async () => {
  try {
    const connection = await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });
    console.log(
      `Connected to Database: ${connection.connection.host}`.green.underline
        .bold
    );
  } catch (error) {
    console.log(`Error connecting to DB: ${error}`.red);
    process.exit(1);
  }
};

module.exports = { connectDB };
