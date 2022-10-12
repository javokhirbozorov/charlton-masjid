import React, {useState, useEffect} from 'react';
import { EventCard } from '../../components';
import { Allevents } from '../../store/actions';

import { useSelector, useDispatch } from 'react-redux';
import { oneCard } from '../../store/actions';


const Events = () => {
//   const products = useSelector((store) => store.products); 
const [products, setEvents] = useState([])
 const dispatch = useDispatch()
  
   useEffect(() => {
    (async () => {
      const res = await fetch('http://localhost:3001/events', {
        method: "GET",
        headers: {
          'Content-Type':'application/json'
        }  });
      const data = await res.json()
      dispatch(Allevents(data))
      setEvents(data) })()
  }, [])

  const OneEvent = (id) => {
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

              <EventCard product={ product } oneEvent={OneEvent} />

            ))
          }
        </div>
      </div>
    </div>
  );
}

export default Events;
