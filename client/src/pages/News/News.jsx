import React from 'react';
import { EventCard } from '../../components';
import { useSelector, useDispatch } from 'react-redux';
import { oneCard } from '../../store/actions';


const News = () => {
  const dispatch = useDispatch();
  const products = useSelector((store) => store.products);

  const OneNews = (id) => {
    const one = products.filter((el) => el.id === id);
    console.log(one)
    dispatch(oneCard(one[0]))
}


  return (
    <div className="bg-white">
    <div className="mx-auto max-w-2xl py-16 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
      <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
        {
          products.map((product) => (
            <EventCard product={ product } oneCard={OneNews}/>
          ))
        }
      </div>
    </div>
  </div>
  );
}

export default News;
