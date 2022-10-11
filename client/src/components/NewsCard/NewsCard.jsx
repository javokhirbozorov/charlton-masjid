import React from 'react'
import './newscard.css'

const NewsCard = ({news}) => {
  return(
    <div className="flex justify-center" id='newscard'>
      <div className="rounded-lg shadow-lg bg-white">
        <img className="rounded-t-lg" src={news.imgLink} alt=""/>
        <div  className="p-6 bg-yellow-500">
          <h5  className="text-gray-900 text-xl font-medium mb-2">{news.title}</h5>
          <p className="text-gray-700 text-base mb-4">
            {news.body}
          </p>
          <button type="button" className=" inline-block px-6 py-2.5 bg-green-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-green-700 hover:shadow-lg focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-800 active:shadow-lg transition duration-150 ease-in-out">Button</button>
        </div>
      </div>
    </div>
  )  
}

export default NewsCard