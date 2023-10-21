const router = require("express").Router();
const {
  saveBooks,
  books,
  bookDetails,
} = require("../controllers/bookController");

// ----------------------------------------------------------- Book Store Routes -----------------------------------------------------------

// POST
// Saving Books
router.route("/books").post(saveBooks);

// GET
// All Books
router.route("/books").get(books);

// GET
// Book Details
router.route("/book/:id").get(bookDetails);

module.exports = router;
