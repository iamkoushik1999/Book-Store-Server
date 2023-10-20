const router = require("express").Router();
const { saveBooks, books } = require("../controllers/bookController");

// ----------------------------------------------------------- Book Store Routes -----------------------------------------------------------

// POST
// Saving Books
router.route("/books").post(saveBooks);

// GET
// All Books
router.route("/books").get(books);

module.exports = router;
