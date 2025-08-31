import React, { useEffect, useState } from "react";

function WriterList() {
  const [writers, setWriters] = useState([]);

  // Fetch writers
  const fetchWriters = async () => {
    try {
      const res = await fetch("http://localhost:5000/zed/writers");
      const data = await res.json();
      setWriters(data);
    } catch (err) {
      console.error("Error fetching writers:", err);
    }
  };

  // Delete writer
  const deleteWriter = async (id) => {
    try {
      await fetch(`http://localhost:5000/zed/writers/${id}`, {
        method: "DELETE",
      });
      setWriters(writers.filter((writer) => writer._id !== id));
      alert("Writer deleted successfully ✅");
    } catch (err) {
      console.error("Error deleting writer:", err);
    }
  };

  useEffect(() => {
    fetchWriters();
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">✍️ Writer List</h2>
      <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
        <thead className="bg-gray-200">
          <tr>
            <th className="py-2 px-4 text-left">Writer Name</th>
            <th className="py-2 px-4 text-right">Action</th>
          </tr>
        </thead>
        <tbody>
          {writers.map((writer) => (
            <tr key={writer._id} className="border-b">
              <td className="py-2 px-4">{writer.name}</td>
              <td className="py-2 px-4 text-right">
                <button
                  onClick={() => deleteWriter(writer._id)}
                  className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
          {writers.length === 0 && (
            <tr>
              <td colSpan="2" className="py-4 text-center text-gray-500">
                No writers available
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default WriterList;
