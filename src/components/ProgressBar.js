import React, { useEffect } from "react";
import useStorage from "../hooks/useStorage";
import { motion } from "framer-motion";

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
            <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blue-600 bg-blue-200">
              Task in progress
            </span>
          </div>
        )}
        {progress === 100 && (
          <div>
            <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blue-600 bg-blue-200">
              Task Completed
            </span>
          </div>
        )}
        <div className="text-right">
          <span className="text-xs font-semibold inline-block text-blue-600">
            {progress}%
          </span>
        </div>
      </div>
      <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-blue-200">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: progress + "%" }}
          className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500"
        ></motion.div>
      </div>
    </div>
  );
};

export default ProgressBar;
