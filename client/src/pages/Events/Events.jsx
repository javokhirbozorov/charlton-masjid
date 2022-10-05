import React from 'react';
import { EventCard } from '../../components';
import { useSelector } from 'react-redux';


const Events = () => {
  const products = useSelector((store) => store.products);

  return (
    <div className="bg-white">
    <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
      <h2 >EVENTS </h2>
      <br />
      <p> About Events <br /> Lorem ipsum dolor sit amet consectetur adipisicing elit. In laudantium non a, nisi eos repellat ut harum architecto ducimus eveniet soluta possimus perferendis delectus quidem nostrum facere rem? Quo, eum!</p>
      <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
        {products.map((product) => (
          <EventCard product={ product }/>
        ))}
      </div>
    </div>
  </div>
  );
}

export default Events;
