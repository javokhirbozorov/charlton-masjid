import React from 'react';
import {  useEffect } from 'react';
import { useState } from 'react';
import NewsCard from '../../components/NewsCard/NewsCard';


const News = () => {
      const [products, setNews] = useState([]);

      useEffect(() => {
(async () => {
  const res = await fetch('http://localhost:3001/news', {
    method: "GET",
    headers: {
      'Content-Type':'application/json'
    }
  });
  const data = await res.json()
  setNews(data)
})()
          
      }, [])
    

  return (
    <div className="bg-white">
    <div className="mx-auto max-w-2xl py-16 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
      <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
        {
           products.map((product) => (
            <NewsCard news={ product }/>
          )) 
        }
      </div>
    </div>
  </div>
  );
}

export default News;
