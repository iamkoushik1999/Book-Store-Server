const router = require("express").Router();
const { saveBooks } = require("../controllers/bookController");

// ----------------------------------------------------------- Book Store Routes -----------------------------------------------------------

// POST
// Saving Books
router.route("/books").post(saveBooks);

module.exports = router;
