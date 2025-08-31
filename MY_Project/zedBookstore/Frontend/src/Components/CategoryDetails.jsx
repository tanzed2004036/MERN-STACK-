import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import BookCard from "./BookCard";

function CategoryDetails() {
  const { id } = useParams();
  const [filteredBooks, setFilteredBooks] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/zed/books")
      .then((res) => {
        const filtered = res.data.filter((book) => book.category === id);
        setFilteredBooks(filtered);
      })
      .catch((error) => {
        console.error("Error fetching books:", error);
      });
  }, [id]);

  return (
    <div className="max-w-screen-xl mx-auto px-4 py-10">
      <h1 className="text-[14px] sm:text-xl md:text-2xl lg:text-2xl font-bold text-center mb-6 text-amber-700">
        ক্যাটাগরি: {id}
      </h1>

      {filteredBooks.length === 0 ? (
        <p className="text-center text-gray-600">
          এই ক্যাটাগরিতে কোনো বই পাওয়া যায়নি।
        </p>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
          {filteredBooks.map((book) => (
            <BookCard key={book._id} book={book} />
          ))}
        </div>
      )}
    </div>
  );
}

export default CategoryDetails;
