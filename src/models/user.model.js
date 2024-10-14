import mongoose from "mongoose";
import aggregatePaginate from "mongoose-aggregate-paginate-v2";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: true,
    },
    fullname: {
      type: String,
      required: true,
    },
    avatar: {
      type: String,
    },
    bio: {
      type: String,
    },
    refreshToken: {
      type: String,
    },
  },
  { timestamps: true }
);

userSchema.plugin(aggregatePaginate);

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

userSchema.methods.generateAccessToken = async function () {
  return await jwt.sign({
    _id: this._id,
    username: this.username,
    email: this.email,
    name: this.name,
  });
};

userSchema.methods.generateRefreshToken = async function () {
  return await jwt.sign({
    _id: this._id,
  });
};

const User = mongoose.model("User", userSchema);
export { User };
