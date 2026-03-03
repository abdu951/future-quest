import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import bgImage from "../assets/oip6.jpg";
import HeroLayout from "../components/HeroLayout";

function Edit() {
  const { id } = useParams();

  const [form, setForm] = useState({
    title: "",
    description: "",
    category: "",
    form_link: "",
  });

  const [image, setImage] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  // 🔹 Fetch existing data
  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/opportunities/${id}`)
      .then((res) => {
        setForm({
          title: res.data.title,
          description: res.data.description,
          category: res.data.category,
          form_link: res.data.form_link,
        });
      });
  }, [id]);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  // 🔥 Main Button Logic
  const handleButtonClick = async (e) => {
    e.preventDefault();

    // If not editing → enable editing
    if (!isEditing) {
      setIsEditing(true);
      return;
    }

    // If editing → SAVE
    try {
      const formData = new FormData();
      formData.append("title", form.title);
      formData.append("description", form.description);
      formData.append("category", form.category);
      formData.append("form_link", form.form_link);

      if (image) {
        formData.append("image", image);
      }

      const res = await axios.patch(
        `http://localhost:8000/api/opportunities/update/${id}`,
        formData,
        { headers: { "Content-Type": "multipart/form-data" } }
      );

      alert(res.data.message);

      setIsEditing(false); // 🔥 back to view mode
      setImage(null);

    } catch (error) {
      alert(error.response?.data?.detail || "Update failed");
    }
  };

  return (
    <div>
        <HeroLayout
                       title="Explore The World with "
                       spanText="Future Quest"
                       description="lorem ipsum dolor amet, consetetur sadipscing elitr sed diam nonumy eirmod tempor invidun dolore."
                       buttonText="Book Now"
                       bgImage={bgImage}
                            />
    <form className={`flex flex-col gap-4 max-w-xl mx-auto mt-10 border p-2 ${!isEditing ? "bg-gray-100 text-gray-500" : ""}`}>
      
      <input
        name="title"
        value={form.title}
        onChange={handleChange}
        disabled={!isEditing}
        className="border p-2"
      />

      <textarea
        name="description"
        value={form.description}
        onChange={handleChange}
        disabled={!isEditing}
        className="border p-2"
      />

      <input
        name="category"
        value={form.category}
        onChange={handleChange}
        disabled={!isEditing}
        className="border p-2"
      />

      <input
        name="form_link"
        value={form.form_link}
        onChange={handleChange}
        disabled={!isEditing}
        className="border p-2"
      />

      {isEditing && (
        <input
          type="file"
          onChange={(e) => setImage(e.target.files[0])}
        />
      )}

      <button
        onClick={handleButtonClick}
        className="bg-blue-600 text-white p-2"
      >
        {isEditing ? "Save" : "Update"}
      </button>

    </form>
    </div>
  );
}

export default Edit;