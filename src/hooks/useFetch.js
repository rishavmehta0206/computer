import React, { useEffect, useState } from "react";

const useFetch = (url, categories) => {
  const [response, setResponse] = useState([]);
  const [response2, setResponse2] = useState([]);

  const fetchData = async () => {
    try {
      const data = await fetch(url).then((response) => response.json());
      setResponse(data);
      setResponse2(data);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    let filteredData = [];
    if (categories.length > 0) {
      console.log(categories);
      response2.forEach((item) => {
        categories.includes(item.category.name) && filteredData.push(item);
      });
      setResponse(filteredData);
    } else {
      fetchData();
    }
  }, [categories]);

  useEffect(() => {
    fetchData();
  }, [url]);

  return { response, response2 };
};

export default useFetch;
