const mongoose = require("mongoose");

const BorrowerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please add a name"],
  },
  phone: {
    type: String,
    maxLength: [15, "Phone Number cannot be more than 15 characters"],
  },
  borrowedDate: {
    type: Date,
    default: Date.now,
  },
  dueDate: {
    type: Date,
    required: [true, "Please add a due date"],
  },
  returned: {
    type: Boolean,
    default: false,
  },
  bookId: {
    type: mongoose.Schema.ObjectId,
    ref: "Book",
    required: true,
  },
});

module.exports = mongoose.model("Borrower", BorrowerSchema);
