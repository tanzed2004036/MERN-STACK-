import Writer from "../Models/WriterModel.js";
import Book from "../Models/BookModel.js"; 

// ➕ Add new writer
export const addWriter = async (req, res) => {
  try {
    const { name,Enname, bio } = req.body;
    const imagePath = req.file ? req.file.path : null;

    const writer = new Writer({
      name,
      Enname,
      bio,
      image: imagePath,
    });

    await writer.save();
    res.status(201).json(writer);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


// 👥 Get all writers
export const getWriters = async (req, res) => {
  try {
    const writers = await Writer.find();
    res.json(writers);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


// 🗑️ Delete a writer
export const deleteWriter = async (req, res) => {
  try {
    const writer = await Writer.findByIdAndDelete(req.params.id);
    if (!writer) return res.status(404).json({ message: "Writer not found" });
    res.json({ message: "Writer deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


// writer name দিয়ে details আনা + সেই writer এর সব বই আনবে
export const getWriterByName = async (req, res) => {
  try {
    const name = req.params.name;
    // প্রথমে writer খুঁজে নাম দিয়ে
    const writer = await Writer.findOne({ name: name });
    if (!writer) return res.status(404).json({ message: "Writer not found" });

    // তারপর writer এর নাম দিয়ে বইগুলো খুঁজে আনা (writer field এ নাম ধরে ধরে বই রাখা হয়েছে ধরে নিচ্ছি)
    const books = await Book.find({ writer: name });

    res.json({ 
      writer: writer,   // writer object (name, image, bio)
      books: books      // সেই writer এর সব বই 
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};