import React, { useState } from "react";
import { useAppContext } from "../context/AppContext";
import toast from "react-hot-toast";

const CreateOpportunity = () => {
  const { axios } = useAppContext();

  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [loading, setLoading] = useState(false);

  const [formDataState, setFormDataState] = useState({
    title: "",
    description: "",
    country: "",
    category: "",
    form_link: "",
  });

  const handleChange = (e) => {
    setFormDataState({
      ...formDataState,
      [e.target.name]: e.target.value,
    });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
    setPreview(URL.createObjectURL(file));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!image) {
      toast.error("Image is required");
      return;
    }

    try {
      setLoading(true);

      const formData = new FormData();
      formData.append("title", formDataState.title);
      formData.append("description", formDataState.description);
      formData.append("country", formDataState.country);
      formData.append("category", formDataState.category);
      formData.append("form_link", formDataState.form_link);
      formData.append("image", image);

      await axios.post("/api/opportunities/add", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      toast.success("Opportunity created successfully");

      // Reset form
      setFormDataState({
        title: "",
        description: "",
        country: "",
        category: "",
        form_link: "",
      });
      setImage(null);
      setPreview(null);

    } catch (error) {
      if (error.response) {
        toast.error(error.response.data.detail);
      } else {
        toast.error("Something went wrong");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center p-8 bg-gray-100 min-h-screen">

      <div className="w-full max-w-2xl bg-white rounded-xl shadow-md p-8">

        <h2 className="text-2xl font-semibold mb-6">
          Create New Opportunity
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">

          {/* Image Upload */}
          <div>
            <label className="block text-sm font-medium mb-2">
              Opportunity Image <span className="text-red-500">*</span>
            </label>

            <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center cursor-pointer hover:border-blue-500 transition">
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="hidden"
                id="imageUpload"
              />
              <label htmlFor="imageUpload">
                {preview ? (
                  <img
                    src={preview}
                    alt="preview"
                    className="mx-auto h-40 object-contain"
                  />
                ) : (
                  <p className="text-gray-500">
                    Click to upload image
                  </p>
                )}
              </label>
            </div>
          </div>

          {/* Title */}
          <div>
            <label className="block text-sm font-medium mb-2">
              Title <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="title"
              value={formDataState.title}
              onChange={handleChange}
              required
              className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-medium mb-2">
              Description
            </label>
            <textarea
              name="description"
              required
              rows="4"
              value={formDataState.description}
              onChange={handleChange}
              className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          {/* Row Fields */}
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-2">
                Country
              </label>
              <input
                type="text"
                name="country"
                required
                value={formDataState.country}
                onChange={handleChange}
                className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                Category
              </label>
              <select
               name="category" 
               type="text" 
               required
               value={formDataState.category}
               onChange={handleChange}
               className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none">
               <option value="" disabled>Select Category</option>
               <option value="education">Education</option>
               <option value="work">Work</option>
               </select>
            </div>
          </div>

          {/* Form Link */}
          <div>
            <label className="block text-sm font-medium mb-2">
              Form Link
            </label>
            <input
              type="text"
              name="form_link"
              required
              value={formDataState.form_link}
              onChange={handleChange}
              className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className={`w-full py-3 rounded-lg text-white font-medium transition ${
              loading
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-blue-600 hover:bg-blue-700"
            }`}
          >
            {loading ? "Creating..." : "Create Opportunity"}
          </button>

        </form>
      </div>
    </div>
  );
};

export default CreateOpportunity;