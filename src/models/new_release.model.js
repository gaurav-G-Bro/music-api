import mongoose from "mongoose";

const newReleaseSchema = new mongoose.Schema(
  {
    song: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Song",
    },
    release_date: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

const NewRelease = mongoose.model("NewRelease", newReleaseSchema);
export { NewRelease };
