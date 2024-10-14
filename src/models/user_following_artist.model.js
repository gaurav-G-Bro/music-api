import mongoose from "mongoose";

const userFollowingArtistSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    artist: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Artist",
    },
    followed_at: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

const UserFollowingArtist = mongoose.model(
  "UserFollowingArtist",
  userFollowingArtistSchema
);
export { UserFollowingArtist };
