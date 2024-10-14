import mongoose from "mongoose";

const artistSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    bio: {
      type: String,
    },
    avatar: {
      type: String,
      required: true,
    },
    followersCount: {
      type: Number,
    },
  },
  { timestamps: true }
);

const Artist = mongoose.model("Artist", artistSchema);
export { Artist };
