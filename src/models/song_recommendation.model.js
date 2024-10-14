import mongoose from "mongoose";

const songRecommendationSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    song: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Song",
    },
    recommended_at: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

const SongRecommendation = mongoose.model(
  "SongRecommendation",
  songRecommendationSchema
);
export { SongRecommendation };
