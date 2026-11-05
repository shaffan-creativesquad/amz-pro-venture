import mongoose from "mongoose";
import { setServers } from "dns";

setServers(["8.8.8.8", "1.1.1.1"]);

const connectDataBase = async () => {
  if (!process.env.MONGO_URI) {
    console.warn("⚠️ MONGO_URI environment variable is not defined. Database features will be unavailable.");
    return;
  }
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, { family: 4 });
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`MongoDB Connection Error: ${error.message}`);
  }
};

export default connectDataBase;
