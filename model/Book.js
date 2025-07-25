const mongoose = require("mongoose");

const BookSchema = new mongoose.Schema({
  title: {
    type: String,
    trim: true,
    required: [true, "Please add a title"],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  authorId: {
    type: mongoose.Schema.ObjectId,
    ref: "Author",
    required: true,
  },
  status: {
    type: String,
    enum: ["unread", "read", "reading"],
  },
  location: {
    type: String,
    enum: ["shelf", "lost", "loaned"],
  },
});

module.exports = mongoose.model("Book", BookSchema);
