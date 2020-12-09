import React from "react";
import useFirestore from "../hooks/useFirestore";

const ImageGrid = () => {
  const { docs } = useFirestore("images");

  return (
    <div>
      {docs &&
        docs.map(doc => (
          <div key={doc.id}>
            <img src={doc.url} alt={doc.id} />
          </div>
        ))}
    </div>
  );
};

export default ImageGrid;
