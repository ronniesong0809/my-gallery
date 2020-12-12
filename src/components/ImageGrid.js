import React from "react";
import useFirestore from "../hooks/useFirestore";
import { motion } from "framer-motion";

const ImageGrid = ({ setSelectedImg }) => {
  const { docs } = useFirestore("images");

  return (
    <div className="img-grid mx-5 my-auto grid grid-cols-4 gap-10">
      {docs &&
        docs.map(doc => (
          <motion.div
            className="relative p-100 opacity-80"
            key={doc.id}
            onClick={() => setSelectedImg(doc.url)}
            whileHover={{ opacity: 1 }}
            layout
          >
            <motion.img
              className="w-full h-full object-cover absolute top-0 left-0"
              src={doc.url}
              alt={doc.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            />
          </motion.div>
        ))}
    </div>
  );
};

export default ImageGrid;
