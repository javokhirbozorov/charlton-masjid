import React from 'react';

const EventCard = ( { product } ) => {
  return (
    <div>
      <a key={product.id} href={product.href} className="group">
        <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
          <p className="mt-1 text-lg font-medium text-gray-900">TITLE</p>
            <img
              src={product.imageSrc}
              alt={product.imageAlt}
              className="h-full w-full object-cover object-center group-hover:opacity-75"
            />
        </div>
          <h3 className="mt-4 text-sm text-gray-700">BLA BLA BLA</h3>
          <p className="mt-1 text-lg font-medium text-gray-900">Read MORE/LESS</p>
    </a>
      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
        Button
      </button>
    </div>
  );
}

export default EventCard;
