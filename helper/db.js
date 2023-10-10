import mongoose from "mongoose";

export const connectDb = async () => {
  try {
    const { connection } = await mongoose.connect(process.env.MONGO_URI, {
      dbName: "To-Do App",
    });
    console.log("Mongo DB Connected...");
    console.log(connection);
  } catch (error) {
    console.log("Failed to connect with database");
    console.log(error);
  }
};
