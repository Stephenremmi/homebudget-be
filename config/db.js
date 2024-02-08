const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);

    console.log(`MongoDB Connected...`);
  } catch (err) {
    console.error(`MongoDB Error: ${err.message}`);
  }
}


module.exports = connectDB;