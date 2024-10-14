import mongoose from "mongoose";

const songSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
    },
    artist: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Artist",
    },
    album: {
      type: String,
      required: true,
    },
    duration: {
      type: Number,
    },
    genre: {
      type: String,
      required: true,
    },
    url: {
      type: String,
    },
    coverImage: {
      type: String,
    },
    releaseDate: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

const Song = mongoose.model("Song", songSchema);
export { Song };
