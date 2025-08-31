import React, { useEffect, useState } from "react";
import axios from "axios";
import WriterCard from "./WriterCard";

const Writers = () => {
  const [writers, setWriters] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchWriters = async () => {
      try {
        const response = await axios.get("http://localhost:5000/zed/writers");
        setWriters(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Failed to load writers", error);
      }
    };

    fetchWriters();
  }, []);
    if (loading) return <p className="text-center mt-10">লোডিং হচ্ছে..</p>;
  return (
    <div className="min-h-screen  px-4 mt-6">
      <h1 className="text-xl sm:text-3xl font-bold text-center mb-8">সব লেখক</h1>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
        {writers.map((writer) => (
          <WriterCard key={writer._id} writer={writer} />
        ))}
      </div>
    </div>
  );
};

export default Writers;
