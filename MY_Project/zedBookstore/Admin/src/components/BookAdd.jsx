import React, { useState } from "react";

function BookAdd() {
  const [formData, setFormData] = useState({
    titleBn: "",
    titleEn: "",
    writer: "",
    category: "",
    details: "",
  });
  const [image, setImage] = useState(null);
  const [pdf, setPdf] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handlePdfChange = (e) => {
    setPdf(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      data.append(key, value);
    });

    if (image) {
      data.append("image", image);
    }

    if (pdf) {
      data.append("pdf", pdf);
    }

    try {
      const response = await fetch("http://localhost:5000/zed/books", {
        method: "POST",
        body: data,
      });

      if (!response.ok) {
        throw new Error("Failed to add book");
      }

      const result = await response.json();
      alert("✅ বই সফলভাবে যোগ করা হয়েছে!");
      
      // ফর্ম রিসেট
      setFormData({ titleBn: "", titleEn: "", writer: "", category: "", details: "" });
      setImage(null);
      setPdf(null);
    } catch (error) {
      alert("❌ Error: " + error.message);
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white p-4 rounded shadow-md space-y-4">
      <h2 className="text-xl font-bold">নতুন বই যুক্ত করুন</h2>

      <form onSubmit={handleSubmit} className="space-y-3">
        <input
          type="text"
          name="titleBn"
          placeholder="বইয়ের বাংলা নাম"
          className="w-full border p-2 rounded"
          onChange={handleChange}
          value={formData.titleBn}
          required
        />
        <input
          type="text"
          name="titleEn"
          placeholder="বইয়ের ইংরেজি নাম"
          className="w-full border p-2 rounded"
          onChange={handleChange}
          value={formData.titleEn}
          required
        />
        <input
          type="text"
          name="writer"
          placeholder="লেখকের নাম"
          className="w-full border p-2 rounded"
          onChange={handleChange}
          value={formData.writer}
          required
        />
        <input
          type="text"
          name="category"
          placeholder="ক্যাটাগরি"
          className="w-full border p-2 rounded"
          onChange={handleChange}
          value={formData.category}
        />
        <textarea
          name="details"
          placeholder="বইয়ের বিবরণ"
          className="w-full border p-2 rounded h-28"
          onChange={handleChange}
          value={formData.details}
        ></textarea>

        <div>
          <p className="font-semibold">📷 Upload Image</p>
          <label htmlFor="image" className="cursor-pointer block">
            <img
              src={
                image
                  ? URL.createObjectURL(image)
                  : "https://via.placeholder.com/200x250?text=Upload+Cover"
              }
              alt="upload"
              className="w-full h-64 object-cover rounded border"
            />
          </label>
          <input
            type="file"
            id="image"
            accept="image/*"
            hidden
            onChange={handleImageChange}
            required
          />

          <p className="font-semibold mt-4">📄 Upload PDF</p>
          <input
            type="file"
            accept="application/pdf"
            onChange={handlePdfChange}
            className="w-full border p-2 rounded"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          📚 Add Book
        </button>
      </form>
    </div>
  );
}

export default BookAdd;
