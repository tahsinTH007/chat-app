import mongoose from "mongoose";

export const connectDB = async () => {
  const uri = process.env.MONGO_DB;

  if (!uri) {
    throw new Error("Mongo Uri is not set");
  }

  try {
    await mongoose.connect(uri, {
      dbName: `chat-app`,
    });
    console.log("Mongo db is connected");
  } catch (error) {
    console.error("MongoDB connection error", error);
    process.exit(1);
  }
};
