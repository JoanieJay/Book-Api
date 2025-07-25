const express = require("express");
const {
  getBooks,
  getBook,
  createBook,
  updateBook,
  deleteBook,
} = require("../controllers/book");
const Book = require("../model/Book");

// // Include other resource routers
// const courseRouter = require("./courses");
// const reviewRouter = require("./reviews");

const router = express.Router();

const advancedResults = require("../middleware/advancedResults");
// const { protect, authorize } = require("../middleware/auth");

// Re-route into other resource routers
// router.use("/:bootcampId/courses", courseRouter);
// router.use("/:bootcampId/reviews", reviewRouter);

router.route("/").get(advancedResults(Book), getBooks).post(createBook);

router.route("/:id").get(getBook).put(updateBook).delete(deleteBook);

module.exports = router;
