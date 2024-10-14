import mongoose from "mongoose";
import { DB_NAME } from "../constants/constant.js";

const CONNECT_DB = async () => {
  try {
    const connection = await mongoose.connect(
      `${process.env.DATABASE_URI}/${DB_NAME}`
    );
    console.log("database connected on host: ", connection.connection.host);
  } catch (error) {
    console.log(`failed to connect with database: ${error}`);
  }
};

export { CONNECT_DB };
