import React from "react";
import { motion } from "framer-motion";

const Modal = ({ selectedImg, setSelectedImg }) => {
  const clickHandler = e => {
    setSelectedImg(null);
  };

  return (
    <motion.div
      className="fixed top-0 left-0 w-full h-full bg-black-50 p-10"
      onClick={clickHandler}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}>
      <motion.img
        className="block max-w-full max-h-full m-auto shadow-lg border-2 border-gray-50"
        src={selectedImg}
        alt="modal"
        initial={{ scale: 0, rotate: 180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20
        }}
      />
    </motion.div>
  );
};

export default Modal;
