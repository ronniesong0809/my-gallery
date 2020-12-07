import React, { useEffect } from "react";
import useStorage from "../hooks/useStorage";

const ProgressBar = ({ file, setFile }) => {
  const { progress, url } = useStorage(file);

  useEffect(() => {
    if (url) {
      setFile(null);
    }
  }, [url, setFile]);

  return (
    <div className="relative pt-1">
      <div className="flex mb-2 items-center justify-between">
        {progress !== 100 && (
          <div>
            <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200">
              Task in progress
            </span>
          </div>
        )}
        {progress === 100 && (
          <div>
            <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200">
              Task Completed
            </span>
          </div>
        )}
        <div className="text-right">
          <span className="text-xs font-semibold inline-block text-pink-600">
            {progress}%
          </span>
        </div>
      </div>
      <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-pink-200">
        <div
          style={{ width: progress + "%" }}
          className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-pink-500"
        ></div>
      </div>
    </div>
  );
};

export default ProgressBar;
