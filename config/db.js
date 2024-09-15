import mongoose from "mongoose";

const db = "mongodb://localhost:27017/test";

const connectDB = async () => {
  try {
    await mongoose.connect(db);
    console.log(`MongoDB Connected`);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

export default connectDB;
