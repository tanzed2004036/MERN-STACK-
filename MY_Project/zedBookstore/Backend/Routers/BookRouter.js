// bookRoutes.js (assumed)
import express from "express";
import { addBook, deleteBook, getBooks, getBookById } from "../Controllers/BookController.js";
import upload from "../Middlewares/Upload.js";

const router = express.Router();

// ➕ Add book (image + pdf)
router.post(
  "/books",
  upload.fields([
    { name: "image", maxCount: 1 },
    { name: "pdf", maxCount: 1 },
  ]),
  addBook
);

// 📚 Get all books
router.get("/books", getBooks);

// 📖 Get single book by ID
router.get("/books/:id", getBookById);

// 🗑️ Delete book
router.delete("/books/:id", deleteBook);

// GET /books/recent
router.get('/books/recent', async (req, res) => {
  const recentBooks = await Book.find().sort({ createdAt: -1 }).limit(6);
  res.json(recentBooks);
});


export default router;
