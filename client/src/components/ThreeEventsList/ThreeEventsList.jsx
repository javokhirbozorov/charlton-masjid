import React from 'react'
import { useSelector } from 'react-redux';

const ThreeEventsList = () => {
    const products = useSelector((store) => store.products);
  return (
    <div  className='events text-center'>
    <div className=''>Events</div>
<div className='eventslist'>


        {products.map((el, index) => 
        index < 3 ?
<div class='contmeleft' key={el.id}>
<img width='140px' src={el.imageSrc} />
<p>{el.name}</p>
</div>
: "" )}

</div>
<button type="button" class="px-6 py-2.5 bg-green-500 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-green-600 hover:shadow-lg focus:bg-green-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-700 active:shadow-lg transition duration-150 ease-in-out">More</button>
</div>
  )
}

export default ThreeEventsList