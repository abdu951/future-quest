import React, { useEffect, useState } from "react";
import { useAppContext } from "../context/AppContext";
import toast from "react-hot-toast";

const ListOpportunity = () => {
  const { axios, navigate } = useAppContext();

  const [opportunities, setOpportunities] = useState([]);
  const [loading, setLoading] = useState(true);
  const [deletingId, setDeletingId] = useState(null);

  // 🔥 Fetch Opportunities
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get("/api/opportunities");
        setOpportunities(data);
      } catch (error) {
        toast.error("Failed to load opportunities");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // 🔥 Delete Handler
  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this opportunity?"
    );

    if (!confirmDelete) return;

    try {
      setDeletingId(id);

      await axios.delete(`/api/opportunities/delete/${id}`);

      // Optimistic UI update
      setOpportunities((prev) =>
        prev.filter((item) => item.id !== id)
      );

      toast.success("Opportunity deleted successfully");
    } catch (error) {
      toast.error("Delete failed");
    } finally {
      setDeletingId(null);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-gray-500">Loading opportunities...</p>
      </div>
    );
  }

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <div className="bg-white shadow-md rounded-xl p-6 mt-6">

        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold">
            Opportunities
          </h2>

          <button
            onClick={() => navigate("/create")}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            + Add New
          </button>
        </div>

        {/* Empty State */}
        {opportunities.length === 0 ? (
          <p className="text-gray-500 text-center py-10">
            No opportunities found.
          </p>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">

              <thead>
                <tr className="border-b bg-gray-50">
                  <th className="py-3 px-6">Title</th>
                  <th className="py-3 px-6">Country</th>
                  <th className="py-3 px-6">Category</th>
                  <th className="py-3 px-40">Posted Date</th>
                  <th className="py-3 px-4 text-right">Actions</th>
                </tr>
              </thead>

              <tbody>
                {opportunities.map((item) => (
                  <tr
                    key={item.id}
                    className="border-b hover:bg-gray-50 transition"
                  >
                    <td className="py-3 px-6 font-medium">
                      {item.title}
                    </td>

                    <td className="py-3 px-6 text-gray-600">
                      {item.country}
                    </td>

                    <td className="py-3 px-6 text-gray-600">
                      {item.category}
                    </td>

                    <td className="py-3 px-40 text-gray-600">
                      {item.date_posted}
                    </td>

                    <td className="py-3 px-4 text-right space-x-2">

                      {/* Update */}
                      <button
                        onClick={() =>
                          navigate(
                            `/opportunities/${item.id}`
                          )
                        }
                        className="px-3 py-1 text-sm bg-yellow-500 text-white rounded hover:bg-yellow-600"
                      >
                        Edit
                      </button>

                      {/* Delete */}
                      <button
                        onClick={() => handleDelete(item.id)}
                        disabled={deletingId === item.id}
                        className={`px-3 py-1 text-sm rounded text-white ${
                          deletingId === item.id
                            ? "bg-gray-400"
                            : "bg-red-600 hover:bg-red-700"
                        }`}
                      >
                        {deletingId === item.id
                          ? "Deleting..."
                          : "Delete"}
                      </button>

                    </td>
                  </tr>
                ))}
              </tbody>

            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default ListOpportunity;