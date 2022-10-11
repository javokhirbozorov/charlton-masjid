import React, {useState, useEffect} from 'react';
import { EventCard } from '../../components';
import { Allevents } from '../../store/actions';
import { useDispatch } from 'react-redux';

const Events = () => {
      const [products, setEvents] = useState([])
      const dispatch  = useDispatch();

  useEffect(() => {
    (async () => {
      const res = await fetch('http://localhost:3001/events', {
        method: "GET",
        headers: {
          'Content-Type':'application/json'
        }
      });
      const data = await res.json()
      dispatch(Allevents(data))
      setEvents(data)
    })()
  }, [])

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl py-16 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {
            products.map((product) => (
              <EventCard key={ product.id } product={ product }/>
            ))
          }
        </div>
      </div>
    </div>
  );
}

export default Events;
