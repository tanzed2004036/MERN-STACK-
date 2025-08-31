import mongoose from "mongoose";

const bookSchema = new mongoose.Schema(
  {
    titleBn: {
      type: String,
      required: [true, "বইয়ের বাংলা নাম আবশ্যক"],
      unique:true,
    },
    titleEn: {
      type: String,
      required: [true, "বইয়ের ইংরেজি নাম আবশ্যক"],
      unique:true,
    },
    writer: {
      type: String,
      required: [true, "লেখকের নাম আবশ্যক"],
    },
    category: {
      type: String,
      required: [true, "ক্যাটাগরি আবশ্যক"],
    },
    image: {
      type: String,
      required: [true, "ছবি আবশ্যক"],
    },
    details: {
      type: String,
      required: [true, "বিস্তারিত তথ্য আবশ্যক"],
    },
    pdf: {
      type: String,
      required: [true, "PDF ফাইল আবশ্যক"],
    },
  },
  {
    timestamps: true,
  }
);

const Book = mongoose.model("Book", bookSchema);
export default Book;
