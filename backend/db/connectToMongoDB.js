import mongoose from "mongoose";

const connectToMongoDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_DB_URI);
    console.log("Connected To MongoDB");
  } catch (error) {
    console.log("Error Connecting To MongoDB", error);
  }
};

export default connectToMongoDB;
