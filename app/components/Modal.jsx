import React from "react";

const Modal = ({ abstract, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50 ">
      <div className="bg-textPeach p-6 rounded-lg w-[90%] md:w-[600px] shadow-lg relative ">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-600 hover:text-black text-3xl font-bold"
        >
          &times;
        </button>
        <h2 className="text-2xl font-bold mb-4 font-heading-barlow">
          Abstract
        </h2>
        <p className="text-base text-textBrown font-subtext-mont mt-10 text-justify px-2 h-[300px] overflow-auto md:h-auto ">
          {abstract || "Abstract is currently not working."}
        </p>
      </div>
    </div>
  );
};

export default Modal;
