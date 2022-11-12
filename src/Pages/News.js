import React, { useEffect, useState } from "react";

const News = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch(
          `https://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.REACT_APP_API_KEY}`
        ).then((res) => res.json());
        // console.log(response);
        setNews(response.articles);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchNews();
  }, []);

  return (
    <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8 overflow-hidden p-2">
      {news.map((item) => {
        return (
          <div className="shadow-xl overflow-hidden rounded-md">
            <img src={item.urlToImage} className="object-cover" />
            <h1>{item.title}</h1>
          </div>
        );
      })}
    </div>
  );
};

export default News;
