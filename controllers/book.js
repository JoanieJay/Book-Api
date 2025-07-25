// const path = require("path");
const ErrorResponse = require("../utils/errorResponse");
const asyncHandler = require("../middleware/async");
const Book = require("../model/Book");

// @desc   Get all Books
// @route  GET /api/v1/books
// @access Public
exports.getBooks = asyncHandler(async (req, res, next) => {
  res.status(200).json(res.advancedResults);
});

// @desc   Get single Book
// @route  GET /api/v1/books/:id
// @access Public
exports.getBook = asyncHandler(async (req, res, next) => {
  const book = await Book.findById(req.params.id);
  if (!book) {
    return next(
      new ErrorResponse(`Book not found with id of ${req.params.id}`, 404)
    );
  }
  res.status(200).json({ success: true, data: book });
});
// @desc   Create new book
// @route  POST /api/v1/book
// @access Private

exports.createBook = asyncHandler(async (req, res, next) => {
  console.log("Website from request body:", req.body.website);
  // Add user to req.body
  // req.body.user = req.user.id;

  const book = await Book.create(req.body);
  res.status(201).json({
    success: true,
    data: book,
  });
});
// @desc   Update book
// @route  PUT /api/v1/book/:id
// @access Private
exports.updateBook = asyncHandler(async (req, res, next) => {
  let book = await Book.findById(req.params.id);
  if (!book) {
    return next(
      new ErrorResponse(`Book not found with id of ${req.params.id}`, 404)
    );
  }

  book = await Book.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  res.status(200).json({ success: true, data: book });
});
// @desc   Delete book
// @route  DELETE /api/v1/book/:id
// @access Private
exports.deleteBook = asyncHandler(async (req, res, next) => {
  const book = await Book.findById(req.params.id);
  if (!book) {
    return next(
      new ErrorResponse(`Book not found with id of ${req.params.id}`, 404)
    );
  }

  await book.deleteOne();
  res.status(200).json({ success: true, data: {} });
});
