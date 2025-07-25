const mongoose = require("mongoose");
// const slugify = require("slugify");
// const Course = require("../module/Course");

const BookSchema = new mongoose.Schema(
  {
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
    },
    // location: {},
  }
  //   {
  //     toJSON: { virtuals: true },
  //     toObject: { virtuals: true },
  //   }
);

// Create bootcamp slug from the name
// BookSchema.pre("save", function (next) {
//   this.slug = slugify(this.name, { lower: true });
//   next();
// });

// // Cascade Delete courses when a bootcamp is deleted
// BookSchema.pre(
//   "deleteOne",
//   { document: true, query: false },
//   async function (next) {
//     console.log(`Courses being removed from bootcamp ${this._id}`);
//     await this.model("Course").deleteMany({ bootcamp: this._id });
//     next();
//   }
// );

// // Reverse populate with virtuals
// BootcampSchema.virtual("courses", {
//   ref: "Course",
//   localField: "_id",
//   foreignField: "bootcamp",
//   justOne: false,
// });

module.exports = mongoose.model("Book", BookSchema);
