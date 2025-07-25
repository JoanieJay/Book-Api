const ErrorResponse = require("../utils/errorResponse");
const asyncHandler = require("../middleware/async");
const Borrower = require("../model/Borrower");

// @desc   Get all Borrowers
// @route  GET /api/v1/borrowers
// @access Public
exports.getBorrowers = asyncHandler(async (req, res, next) => {
  const borrowers = await Borrower.find();
  res
    .status(200)
    .json({ success: true, count: borrowers.length, data: borrowers });
});

// @desc   Get single Borrower
// @route  GET /api/v1/borrowers/:id
// @access Public
exports.getBorrower = asyncHandler(async (req, res, next) => {
  const borrower = await Borrower.findById(req.params.id);
  if (!borrower) {
    return next(
      new ErrorResponse(`Borrower not found with id of ${req.params.id}`, 404)
    );
  }
  res.status(200).json({ success: true, data: borrower });
});
// @desc   Create new borrower
// @route  POST /api/v1/borrowers
// @access Private

exports.createBorrower = asyncHandler(async (req, res, next) => {
  const borrower = await Borrower.create(req.body);
  res.status(201).json({
    success: true,
    data: borrower,
  });
});
// @desc   Update borrower
// @route  PUT /api/v1/borrower/:id
// @access Private
exports.updateBorrower = asyncHandler(async (req, res, next) => {
  let borrower = await Borrower.findById(req.params.id);
  if (!borrower) {
    return next(
      new ErrorResponse(`Borrower not found with id of ${req.params.id}`, 404)
    );
  }

  borrower = await Borrower.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  res.status(200).json({ success: true, data: borrower });
});
// @desc   Delete borrower
// @route  DELETE /api/v1/borrower/:id
// @access Private
exports.deleteBorrower = asyncHandler(async (req, res, next) => {
  const borrower = await Borrower.findById(req.params.id);
  if (!borrower) {
    return next(
      new ErrorResponse(`Borrower not found with id of ${req.params.id}`, 404)
    );
  }

  await borrower.deleteOne();
  res.status(200).json({ success: true, data: {} });
});
