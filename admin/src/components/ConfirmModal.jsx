import React from "react";

const ConfirmModal = ({
  isOpen,
  onClose,
  onConfirm,
  loading,
  title = "Confirm Action",
  message = "Are you sure you want to continue?",
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">

      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={loading ? null : onClose}
      />

      {/* Modal */}
      <div className="relative bg-white w-full max-w-md mx-4 rounded-xl shadow-lg p-6 animate-fadeIn">

        <h3 className="text-lg font-semibold mb-3">
          {title}
        </h3>

        <p className="text-gray-600 mb-6">
          {message}
        </p>

        <div className="flex justify-end gap-3">

          <button
            onClick={onClose}
            disabled={loading}
            className="px-4 py-2 rounded-lg border border-gray-300 hover:bg-gray-100"
          >
            Cancel
          </button>

          <button
            onClick={onConfirm}
            disabled={loading}
            className={`px-4 py-2 rounded-lg text-white ${
              loading
                ? "bg-gray-400"
                : "bg-red-600 hover:bg-red-700"
            }`}
          >
            {loading ? "Deleting..." : "Delete"}
          </button>

        </div>
      </div>
    </div>
  );
};

export default ConfirmModal;