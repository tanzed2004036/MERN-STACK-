import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function WriterSearch() {
  const [query, setQuery] = useState("");
  const [writers, setWriters] = useState([]);
  const [showList, setShowList] = useState(false);
  const searchRef = useRef(null);
  const navigate = useNavigate(); // ✅ hook

  // Fetch writers from backend
  useEffect(() => {
    axios
      .get("http://localhost:5000/zed/writers")
      .then((res) => setWriters(res.data))
      .catch((err) => console.error("Error fetching writers:", err));
  }, []);

  const filteredWriters = writers.filter(
    (writer) =>
      writer.name.toLowerCase().includes(query.toLowerCase()) ||
      writer.Enname.toLowerCase().includes(query.toLowerCase())
  );

  useEffect(() => {
    function handleClickOutside(event) {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setShowList(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="">
      <div className="max-w-xl mx-auto mt-10 p-4" ref={searchRef}>
        <input
          type="text"
          placeholder="🔍 লেখক সার্চ করুন..."
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setShowList(true);
          }}
          className="w-full p-3 rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
        />

        {showList && query.trim() !== "" && filteredWriters.length > 0 && (
          <ul className="mt-4 rounded-lg border border-gray-200 shadow-md bg-white">
            {filteredWriters.map((writer) => (
              <li
                key={writer._id}
                onClick={() => navigate(`/writers/${writer.name}`)} // ✅ click এ navigate
                className="flex items-center gap-4 p-2 hover:bg-purple-100 cursor-pointer transition"
              >
                <img
                  src={`http://localhost:5000/${writer.image.replace(/\\/g, "/")}`}
                  alt={writer.name}
                  className="w-8 h-8 object-cover rounded-full"
                />
                <span className="font-semibold text-gray-800">
                  {writer.name} / {writer.Enname}
                </span>
              </li>
            ))}
          </ul>
        )}

        {showList && query.trim() !== "" && filteredWriters.length === 0 && (
          <p className="mt-2 text-sm text-gray-500">কোনো লেখক পাওয়া যায়নি</p>
        )}
      </div>
    </div>
  );
}
