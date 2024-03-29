import { useState, useEffect } from "react";
import {
  projectStorage,
  projectFirestore,
  timestamp
} from "../firebase/config";

const useStorage = file => {
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(null);
  const [url, setUrl] = useState(null);

  useEffect(() => {
    const storageRef = projectStorage.ref(file.name);
    const collectionRef = projectFirestore.collection("images");

    storageRef.put(file).on(
      "state_changed",
      snap => {
        let precentage = (snap.bytesTransferred / snap.totalBytes) * 100;
        setProgress(precentage);
      },
      error => {
        setError(error);
      },
      async () => {
        const url = await storageRef.getDownloadURL();
        const lastUpdated = timestamp();

        collectionRef.add({ url: url, lastUpdated: lastUpdated });
        setUrl(url);
      }
    );
  }, [file]);

  return { progress, error, url };
};

export default useStorage;
