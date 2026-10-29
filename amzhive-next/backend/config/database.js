import mongoose from "mongoose";
import { setServers } from "dns";

setServers(["8.8.8.8", "1.1.1.1"]);

const connectDataBase = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, { family: 4 });
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.log(`Error: ${error.message}`);
    process.exit(1);
  }
};

export default connectDataBase;
