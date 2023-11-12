import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

export default function useFetch(url, query = "") {
  const [data, setData] = useState(null); // Set an initial value of null

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function getData() {
      try {
        setLoading(true);

        const response = await axios.get(`${url}?${query}`);
        const responseData = response.data; // Access the actual data from the response

        setData(responseData);
      } catch (error) {
        setData([]); // Provide an appropriate default value
        toast.error(error?.message);
      } finally {
        setLoading(false);
      }
    }

    getData();
  }, [url, query]);
  console.log(query)

  return { loading, data };
}
