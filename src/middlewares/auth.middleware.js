import { ApiError } from "../utils/ApiError.js";
import jwt from "jsonwebtoken";
import { User } from "../models/user.model.js";

const verifyToken = async (req, res, next) => {
  try {
    const incomingToken =
      req.cookies?.accessToken ||
      req.header("Authorization")?.replace("Bearer ", "");

    if (!incomingToken) throw new ApiError(401, "token not available");

    const decodeToken = await jwt.verify(
      incomingToken,
      process.env.SECRET_ACCESS_TOKEN
    );
    if (!decodeToken) throw new ApiError(401, "Invalid token");

    const userId = decodeToken?._id;
    const user = await User.findById(userId).select("-password");
    if (!user) throw new ApiError(400, "token expired or used");

    req.user = user;
    next();
  } catch (error) {
    next();
  }
};

export { verifyToken };
