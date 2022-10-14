import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const ThreeEventsList = () => {
    const products = [{id: 1, imgLink: "https://coursereport-production.imgix.net/uploads/school/logo/594/original/elbrus-bootcamp-logo.png?w=200&h=200&dpr=5&q=20", title:"Release from Elbrus"}, {id:2, imgLink: 'https://tatar-duslyk.ru/wp-content/uploads/2021/03/Bolgar_istoricheskiy_0.jpg', title: "16.10.2022 There will be cleaning on the territory of the masjid"}, {id: 3, imgLink: 'https://png.pngtree.com/png-vector/20190904/ourlarge/pngtree-stylish-moon-design-islamic-new-year-background-png-image_1722002.jpg', title: "New year to all Muslims"}]
  return (
    <div  className='events text-center'>
    <div>Events</div>
<div className='eventslist'>


        {products.map((el, index) => 
        index < 3 ?
<div class='contmeleft' key={el.id}>
<img width='140px' src={el.imgLink} />
<p>{el.title}</p>
</div>
: "" )}

</div>
<Link to="/events">
<button type="button" class="px-6 py-2.5 bg-green-500 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-green-600 hover:shadow-lg focus:bg-green-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-700 active:shadow-lg transition duration-150 ease-in-out">More</button>
</Link>
</div>
  )
}

export default ThreeEventsList