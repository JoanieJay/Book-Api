const express = require("express");
const {
  getBorrowers,
  getBorrower,
  createBorrower,
  updateBorrower,
  deleteBorrower,
} = require("../controllers/borrower");
const Borrower = require("../model/Borrower");

const router = express.Router();

router.route("/").get(getBorrowers).post(createBorrower);

router
  .route("/:id")
  .get(getBorrower)
  .put(updateBorrower)
  .delete(deleteBorrower);

module.exports = router;
