import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";

function BookDetails() {
  const { id } = useParams();
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/zed/books/${id}`)
      .then((res) => {
        setBook(res.data);
        setLoading(false);
      })
      .catch((err) => {
        setError("Book not found");
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p className="text-center mt-10">Loading...</p>;
  if (error || !book)
    return (
      <div className="text-center py-10 text-xl text-red-500">
        Book not found.
      </div>
    );

  return (
    <div>
      <div className="min-h-screen bg-base px-4 py-20 flex items-center justify-center">
        <div className="bg-amber-100 shadow-lg rounded-xl overflow-hidden w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
          {/* Book Image */}
          <div className="flex justify-center items-center">
            <div className="w-40 h-56 xs:w-28 xs:h-40 sm:w-48 sm:h-64 md:w-64 md:h-96 lg:w-80 lg:h-[28rem] xl:w-96 xl:h-[32rem] overflow-hidden rounded-xl shadow-md">
              <img
                src={`http://localhost:5000/${book.image}`}
                alt={book.titleBn}
                className="w-full h-full object-cover object-center transition duration-500 ease-in-out"
              />
            </div>
          </div>

          {/* Book Details */}
          <div className="flex flex-col justify-center space-y-4 text-center md:text-left">
            <h1 className=" xs:text-[6px] sm:text-2xl font-bold text-rose-900 text-center">
              {book.titleBn} <br /> ({book.titleEn})
            </h1>

            <p className="text-xs xs:text-[10px] sm:text-sm text-gray-600">
              <span className="font-semibold">লেখক :</span>{" "}
              <Link
                to={`/writers/${encodeURIComponent(book.writer)}`}
                className="text-blue-600 hover:underline font-bold"
              >
                {book.writer}
              </Link>
            </p>

            <p className="text-xs xs:text-[10px] sm:text-sm text-gray-600">
              <span className="font-semibold">ক্যাটাগরি :</span>{" "}
              <Link
                to={`/categories/${encodeURIComponent(book.category)}`}
                className="font-bold text-green-700 hover:underline"
              >
                {book.category}
              </Link>
            </p>

            <p className="text-gray-700 text-xs xs:text-[10px] sm:text-sm whitespace-pre-line">
              {book.details}
            </p>

            <a
              href={`http://localhost:5000/${book.pdf}`}
              download
              className="mt-4 bg-rose-500 hover:bg-green-700 text-white px-5 py-2 rounded-md w-max mx-auto md:mx-0 transition"
            >
              📥 Download PDF
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookDetails;
