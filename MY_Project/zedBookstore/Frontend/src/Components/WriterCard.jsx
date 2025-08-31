import React from "react";
import { Link } from "react-router-dom";

function WriterCard({ writer }) {
  return (
    <Link
      to={`/writers/${writer.name}`}
      className="max-w-xs w-full rounded-lg overflow-hidden shadow-md bg-blue-100 hover:shadow-amber-400 transition-shadow duration-300 mx-auto"
    >
      <div className="relative w-full pb-[100%] overflow-hidden">
        <img
          src={`http://localhost:5000/${writer.image}`}
          alt={writer.name}
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
      </div>
      <div className="p-4 text-center">
        <p
          title={writer.name}
          className="text-xs sm:text-sm font-semibold text-gray-800 break-words"
        >
          {writer.name}
        </p>
      </div>
    </Link>
  );
}

export default WriterCard;
