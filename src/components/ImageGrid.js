import React from "react";
import useFirestore from "../hooks/useFirestore";

const ImageGrid = ({ setSelectedImg }) => {
  const { docs } = useFirestore("images");

  return (
    <div className="img-grid mx-5 my-auto grid grid-cols-4 gap-10">
      {docs &&
        docs.map(doc => (
          <div
            className="relative p-100"
            key={doc.id}
            onClick={() => setSelectedImg(doc.url)}
          >
            <img
              className="w-full h-full object-cover absolute top-0 left-0"
              src={doc.url}
              alt={doc.id}
            />
          </div>
        ))}
    </div>
  );
};

export default ImageGrid;
