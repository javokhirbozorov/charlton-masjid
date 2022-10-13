import React from 'react'
import { Link } from 'react-router-dom'
import './newscard.css'

const NewsCard = ({news, oneCard}) => {
  return(
    <div key={news.id} >
    
        <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-yellow-500 xl:aspect-w-7 xl:aspect-h-8">
          <p className="mt-1 text-lg font-medium text-green-600">{news.title}</p>
            <img
              src={news.imgLink}
              alt=''
              className="h-full w-full object-cover object-center group-hover:opacity-75"
            />
        </div>

          <p className="mt-1 text-lg font-medium text-green-900" id='clip'>{news.body}</p>

         <Link to={`/news/${news.id}`}>
      <button onClick={() => oneCard(news.id)} class="bg-yellow-500 hover:bg-yellow-700 text-green font-bold py-2 px-4 rounded-full">
      Read completely

      </button>
    </Link>       
     </div>
  )  
}

export default NewsCard