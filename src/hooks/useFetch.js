import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

export default function useFetch(url, query = "") {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(()=>{
    async function getData(){
        try {
            setLoading(true);

            const data = await axios.get(`${url}?${query}`);

            setData(data);
        } catch (error) {
            setData([]);
            toast.error(error?.message);
        }finally{
            setLoading(false);
        }
    }

    getData()
  },[url,query]);

  return{loading,data}
}
