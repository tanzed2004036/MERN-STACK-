import React, { useEffect, useState } from "react";

function BookList() {
  const [books, setBooks] = useState([]);

  // Fetch books
  const fetchBooks = async () => {
    try {
      const res = await fetch("http://localhost:5000/zed/books");
      const data = await res.json();
      setBooks(data);
    } catch (err) {
      console.error("Error fetching books:", err);
    }
  };

  // Delete book
  const deleteBook = async (id) => {
    try {
      await fetch(`http://localhost:5000/zed/books/${id}`, {
        method: "DELETE",
      });
      setBooks(books.filter((book) => book._id !== id)); // update UI
      alert("Book deleted successfully ✅");
    } catch (err) {
      console.error("Error deleting book:", err);
    }
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">📚 Book List</h2>
      <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
        <thead className="bg-gray-200">
          <tr>
            <th className="py-2 px-4 text-left">Book Name</th>
            <th className="py-2 px-4 text-right">Action</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book) => (
            <tr key={book._id} className="border-b">
              <td className="py-2 px-4">{book.titleBn}</td>
              <td className="py-2 px-4 text-right">
                <button
                  onClick={() => deleteBook(book._id)}
                  className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
          {books.length === 0 && (
            <tr>
              <td colSpan="2" className="py-4 text-center text-gray-500">
                No books available
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default BookList;
