const router = require("express").Router();
const {
  saveBooks,
  books,
  bookDetails,
  updateBook,
  deleteBook,
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

// PUT
// UPDATE BOOK
router.route("/book/:id").put(updateBook);

// DELETE
// DELETE BOOK
router.route("/book/:id").delete(deleteBook);

module.exports = router;
