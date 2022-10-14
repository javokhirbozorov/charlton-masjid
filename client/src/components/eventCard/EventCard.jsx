import React from 'react';
import { Link } from "react-router-dom";
import "./eventscard.css";

const EventCard = ( { product, oneEvent} ) => {
  return (
    <div key={product.id} >
    
        <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-green-600 xl:aspect-w-7 xl:aspect-h-8">
          <p className="mt-1 text-lg font-medium text-yellow-600" id='cliptitle'>{product.title}</p>
            <img
              src={product.imgLink}
              alt=''
              className="object-cover object-center group-hover:opacity-75"
              id='imgid'
            />
        </div>

          <p className="mt-1 text-lg font-medium text-yellow-900" id='clip'>{product.body}</p>
      


    <Link to={`/events/${product.id}`}>
      <button onClick={() => oneEvent(product.id)} class="bg-green-500 hover:bg-green-700 text-yellow font-bold py-2 px-4 rounded-full">
      Read completely

      </button>
    </Link>
    </div>
  );
}

export default EventCard;
