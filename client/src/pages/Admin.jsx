import { useState } from "react";
import axios from "axios";
import bgImage from "../assets/oip6.jpg";
import HeroLayout from "../components/HeroLayout";
import toast from "react-hot-toast";

function Admin() {
  const [form, setForm] = useState({
    title: "",
    description: "",
    category: "",
    form_link: "",
  });

  const [image, setImage] = useState(null);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!image) {
      toast.error("Please select an image");
      return;
    }

    const formData = new FormData();
    formData.append("title", form.title);
    formData.append("description", form.description);
    formData.append("category", form.category);
    formData.append("form_link", form.form_link);
    formData.append("image", image);

    try {
      const res = await axios.post(
        "http://localhost:8000/api/opportunities/add",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      // ✅ Correct success message
      toast.success(data.message);

    } catch (error) {
      console.log(error.response?.data);

      // ✅ Handle FastAPI error properly
      if (error.response?.data?.detail) {
        alert(error.response.data.detail);
      } else {
        toast.error("Something went wrong");
      }
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
    <form onSubmit={handleSubmit}  className="flex flex-col gap-4">
      <input name="title" onChange={handleChange} placeholder="Title" className="border p-2"/>
      <textarea name="description" onChange={handleChange} className="border p-2" placeholder="description"/>
      <input name="category" onChange={handleChange} placeholder="Category" className="border p-2"/>
      <input name="form_link" onChange={handleChange} placeholder="Form Link" className="border p-2"/>

      <input
        type="file"
        accept="image/*"
        onChange={(e) => setImage(e.target.files[0])}
        className="border p-2"
      />

      <button type="submit" className="bg-[#ffa843] hover:bg-indigo-700 transition cursor-pointer mt-4 mb-3 ml-2 px-6 py-2 font-medium rounded-md text-white text-sm">Create</button>
    </form>
    </div>
  );
}

export default Admin;