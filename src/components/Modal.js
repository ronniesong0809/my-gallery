import React from "react";

const Modal = ({ selectedImg, setSelectedImg }) => {
  const clickHandler = e => {
    setSelectedImg(null);
  };

  return (
    <div
      className="fixed top-0 left-0 w-full h-full bg-black-50 p-10"
      onClick={clickHandler}
    >
      <img
        className="block max-w-full max-h-full m-auto shadow-lg border-2 border-gray-50"
        src={selectedImg}
        alt="modal"
      />
    </div>
  );
};

export default Modal;
