import mongoose from "mongoose";
import { DB_NAME } from "../constants/constant.js";

const CONNECT_DB = async () => {
  try {
    const connection = await mongoose.connect(
      `${process.env.DATABASE_URI}/${DB_NAME}`
    );
    console.log("database connected on host: ", connection.connection.host);
  } catch (error) {
    throw new ApiError(400, "Failed to connect database", error.message);
  }
};

export { CONNECT_DB };
