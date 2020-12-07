import React, { useState } from "react";
import ProgressBar from "./ProgressBar";

const UploadForm = () => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);

  const types = ["image/png", "image/jpeg", "image/gif"];

  const changeHandler = e => {
    let selected = e.target.files[0];

    if (selected && types.includes(selected.type)) {
      setFile(selected);
      setError("");
    } else {
      setFile(null);
      setError("Please select a image file");
    }
  };

  return (
    <div className="title m-5">
      <form className="m-auto text-center">
        <label>
          <input type="file" onChange={changeHandler} hidden/>
          <span className="text-6xl text-blue-600 hover:text-opacity-50">+</span>
        </label>
        {error && <div className="error text-red-400">{error}</div>}
        {file && <div className="file text-blue-700">{file.name}</div>}
        {file && <ProgressBar file={file} setFile={setFile} />}
      </form>
    </div>
  );
};
export default UploadForm;
