import mongoose from "mongoose";

const curatedPlaylistSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
    },
    description: {
      type: String,
    },
  },
  { timestamps: true }
);

const CuratedPlaylist = mongoose.model(
  "CuratedPlaylist",
  curatedPlaylistSchema
);

export { CuratedPlaylist };
