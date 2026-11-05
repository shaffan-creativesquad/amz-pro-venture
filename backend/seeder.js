import dotenv from "dotenv";
import connectDataBase from "./config/database.js";
import User from "./models/userModel.js";
import Blog from "./models/blogModel.js";
import users from "./data/users.js";

dotenv.config();
connectDataBase();

const importData = async () => {
  try {
    await User.deleteMany();
    await Blog.deleteMany();
    for (const u of users) {
      await new User(u).save();
    }
    console.log("✅ Data Imported! Admin user created.");
    process.exit();
  } catch (error) {
    console.error("❌ Error:", error);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    await User.deleteMany();
    await Blog.deleteMany();
    console.log("✅ Data Destroyed!");
    process.exit();
  } catch (error) {
    console.error("❌ Error:", error);
    process.exit(1);
  }
};

if (process.argv[2] === "-d") {
  destroyData();
} else {
  importData();
}
