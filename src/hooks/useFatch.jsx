import { useState, useEffect } from "react";

function useFatch(url, category = null) {
  const [data, setData] = useState([]);
  const [isPanding, setIsPanding] = useState(false);
  const [error, stIsError] = useState(false);

  const fetApi = async () => {
    try {
      const req = await fetch(url);

      if (!req.ok) {
        throw new Error(req.statusText);
      }
      const data = await req.json();

      if (category) {
        filterData(category, data.menu);
      } else {
        setData(data.menu);
      }
    } catch (err) {
      console.log(err.message);
    }
  };
  category;
  function filterData(category, item) {
    const filteredData = item.filter((item) => {
      return item.category === category;
    });
    setData(filteredData);
  }

  useEffect(() => {
    fetApi();
  }, [url, category]);

  return { data, isPanding, error };
}
export default useFatch;
