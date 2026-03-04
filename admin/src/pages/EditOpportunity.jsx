import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAppContext } from "../context/AppContext";
import toast from "react-hot-toast";
import { IoArrowBack } from "react-icons/io5";
const EditOpportunity = () => {
  const { id } = useParams();
  const { axios, navigate } = useAppContext();

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);

  const [formDataState, setFormDataState] = useState({
    title: "",
    description: "",
    country: "",
    category: "",
    form_link: "",
  });

  // 🔥 Fetch Existing Data
  useEffect(() => {
    const fetchOpportunity = async () => {
      try {
        const { data } = await axios.get(`/api/opportunities/${id}`);

        setFormDataState({
          title: data.title,
          description: data.description,
          country: data.country,
          category: data.category,
          form_link: data.form_link,
        });

        // Set existing image preview
        setPreview(data.image_url);

      } catch (error) {
        toast.error("Failed to load opportunity");
        navigate("/admin");
      } finally {
        setLoading(false);
      }
    };

    fetchOpportunity();
  }, [id]);

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

  const handleUpdate = async (e) => {
    e.preventDefault();

    try {
      setSaving(true);

      const formData = new FormData();

      formData.append("title", formDataState.title);
      formData.append("description", formDataState.description);
      formData.append("country", formDataState.country);
      formData.append("category", formDataState.category);
      formData.append("form_link", formDataState.form_link);

      if (image) {
        formData.append("image", image);
      }

      await axios.patch(`/api/opportunities/update/${id}`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      toast.success("Opportunity updated successfully");
      navigate("/admin");

    } catch (error) {
      if (error.response) {
        toast.error(error.response.data.detail);
      } else {
        toast.error("Update failed");
      }
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-gray-500">Loading...</p>
      </div>
    );
  }

  return (
    <div className="flex justify-center p-8 bg-gray-100 min-h-screen">

      <div onClick={() => navigate("/")} className="flex gap-2 cursor-pointer text-blue-600">
                  <IoArrowBack size={20} />
                  <p>Back to list</p>
                  
              </div>

      <div className="w-full max-w-2xl bg-white rounded-xl shadow-md p-8 mt-10">

        <h2 className="text-2xl font-semibold mb-6">
          Update Opportunity
        </h2>

        <form onSubmit={handleUpdate} className="space-y-6">

          {/* Image */}
          <div>
            <label className="block text-sm font-medium mb-2">
              Opportunity Image
            </label>

            <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-blue-500 transition">
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
          <input
            type="text"
            name="title"
            value={formDataState.title}
            onChange={handleChange}
            className="w-full border rounded-lg px-4 py-2"
          />

          {/* Description */}
          <textarea
            name="description"
            rows="4"
            value={formDataState.description}
            onChange={handleChange}
            className="w-full border rounded-lg px-4 py-2"
          />

          {/* Country + Category */}
          <div className="grid md:grid-cols-2 gap-4">
            <input
              type="text"
              name="country"
              value={formDataState.country}
              onChange={handleChange}
              className="w-full border rounded-lg px-4 py-2"
            />
            <input
              type="text"
              name="category"
              value={formDataState.category}
              onChange={handleChange}
              className="w-full border rounded-lg px-4 py-2"
            />
          </div>

          {/* Form Link */}
          <input
            type="url"
            name="form_link"
            value={formDataState.form_link}
            onChange={handleChange}
            className="w-full border rounded-lg px-4 py-2"
          />

          {/* Buttons */}
          <div className="flex gap-4">
            <button
              type="submit"
              disabled={saving}
              className={`flex-1 py-3 rounded-lg text-white ${
                saving
                  ? "bg-gray-400"
                  : "bg-blue-600 hover:bg-blue-700"
              }`}
            >
              {saving ? "Saving..." : "Save Changes"}
            </button>

            <button
              type="button"
              onClick={() => navigate("/admin")}
              className="flex-1 py-3 rounded-lg border border-gray-300 hover:bg-gray-100"
            >
              Cancel
            </button>
          </div>

        </form>
      </div>
    </div>
  );
};

export default EditOpportunity;