import React from "react";
import useStorage from "../hooks/useStorage";

const ProgressBar = ({ file, setFile }) => {
  const { progress, url } = useStorage(file);
  console.log(progress, url);

  return (
    <div class="relative pt-1">
      <div class="flex mb-2 items-center justify-between">
        {progress !== 100 && (
          <div>
            <span class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200">
              Task in progress
            </span>
          </div>
        )}
        {progress === 100 && (
          <div>
            <span class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200">
              Task Completed
            </span>
          </div>
        )}
        <div class="text-right">
          <span class="text-xs font-semibold inline-block text-pink-600">
            {progress}%
          </span>
        </div>
      </div>
      <div class="overflow-hidden h-2 mb-4 text-xs flex rounded bg-pink-200">
        <div
          style={{ width: progress + "%" }}
          class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-pink-500"
        ></div>
      </div>
    </div>
  );
};

export default ProgressBar;
