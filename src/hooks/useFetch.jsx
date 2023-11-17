import { useEffect, useState } from "react";
import useAxiosSecure from "./useAxiosSecure";

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [loader, setLoader] = useState(true);
  const axiosSecure = useAxiosSecure();

  useEffect(() => {
    axiosSecure.get(url).then((data) => {
      setData(data.data);
      setLoader(false);
    });
  }, [axiosSecure, url]);

  return { data, loader };
};

export default useFetch;
