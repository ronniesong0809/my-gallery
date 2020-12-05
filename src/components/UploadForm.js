import React, { useState } from "react";

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
    <div className="title m-2">
      <form>
        <input type="file" onChange={changeHandler} />
        {error && <div className="error">{error}</div>}
        {file && <div className="file">{file.name}</div>}
      </form>
    </div>
  );
};
export default UploadForm;
