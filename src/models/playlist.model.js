import mongoose from "mongoose";

const playlistSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    description: {
      type: String,
    },
    isPublic: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

const Playlist = mongoose.model("Playlist", playlistSchema);
export { Playlist };
