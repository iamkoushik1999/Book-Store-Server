// External Modules
const asyncHandler = require("express-async-handler");
// Model
const bookModel = require("../models/bookModel");

// ----------------------------------------------------------- Book Store Controller -----------------------------------------------------------

// POST
// Saving Books
exports.saveBooks = asyncHandler(async (req, res) => {
  try {
    const { title, author, publishYear, description } = req.body;
    if (!title || !author || !publishYear) {
      res.status(400);
      throw new Error("Please fill all the fields");
    }

    const newBook = await bookModel.create({
      title,
      author,
      publishYear,
      description,
    });

    res.status(201).json(newBook);
  } catch (error) {
    res.status(500);
    throw new Error(error);
  }
});
