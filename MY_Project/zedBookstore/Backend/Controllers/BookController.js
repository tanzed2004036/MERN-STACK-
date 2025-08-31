import Book from "../Models/BookModel.js";
import fs from "fs";

// 📚 Get all books
export const getBooks = async (req, res) => {
  try {
    const books = await Book.find().sort({ createdAt: -1 }); // নতুন বই আগে
    res.json(books);
  } catch (err) {
    console.error("Get Books Error:", err);
    res.status(500).json({ message: "❌ সার্ভার ত্রুটি" });
  }
};

// 📚 Add a new book
export const addBook = async (req, res) => {
  try {
    const { titleBn, titleEn, writer, category, details } = req.body;

    const image = req.files?.image?.[0]?.path;
    const pdf = req.files?.pdf?.[0]?.path;

    if (!titleBn || !titleEn || !writer || !category || !details || !image || !pdf) {
      return res.status(400).json({ message: "সব ফিল্ড অবশ্যই পূরণ করতে হবে।" });
    }

    const newBook = new Book({
      titleBn,
      titleEn,
      writer,
      category,
      details,
      image,
      pdf,
    });

    const saved = await newBook.save();
    res.status(201).json({ message: "✅ বই যোগ করা হয়েছে", book: saved });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "❌ সার্ভার ত্রুটি" });
  }
};

// 🗑️ Delete a book by ID
export const deleteBook = async (req, res) => {
  try {
    const { id } = req.params;

    const book = await Book.findById(id);
    if (!book) {
      return res.status(404).json({ message: "বই পাওয়া যায়নি" });
    }

    // Local file delete (if exist)
    if (book.image && fs.existsSync(book.image)) {
      fs.unlinkSync(book.image);
    }
    if (book.pdf && fs.existsSync(book.pdf)) {
      fs.unlinkSync(book.pdf);
    }

    await Book.findByIdAndDelete(id);
    res.json({ message: "🗑️ বই মুছে ফেলা হয়েছে" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "❌ সার্ভার ত্রুটি" });
  }
};
export const getBookById = async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    if (!book) return res.status(404).json({ message: "বই পাওয়া যায়নি" });
    res.json(book);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "সার্ভার ত্রুটি" });
  }
};