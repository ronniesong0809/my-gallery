import React from "react";
import useFirestore from "../hooks/useFirestore";

const ImageGrid = () => {
  const { docs } = useFirestore("images");

  return (
    <div className="img-grid mx-5 my-auto grid grid-cols-4 gap-10">
      {docs &&
        docs.map(doc => (
          <div className="img-wrap overflow-hidden h-0 p-s-50 relative opacity-80" key={doc.id}>
            <img className=" min-w-full min-h-full max-w-150 absolute top-0 left-0" src={doc.url} alt={doc.id} />
          </div>
        ))}
    </div>
  );
};

export default ImageGrid;
