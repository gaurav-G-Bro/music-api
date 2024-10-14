import mongoose from "mongoose";

const sharedSongSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    song: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Song",
    },
    shared_with: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

const SharedSong = mongoose.model("SharedSong", sharedSongSchema);
export { SharedSong };
