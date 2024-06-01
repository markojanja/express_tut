import mongoose from "mongoose";

const notesSchema = mongoose.Schema(
  {
    author: {
      type: String,
      required: true,
    },
    note: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Note", notesSchema);
