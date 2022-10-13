import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const ThreeEventsList = () => {
    const products = [{id: 1, imgLink: "https://newvz.ru/wp-content/uploads/2018/11/london.jpg", title:"Title"}, {id:2, imgLink: 'https://phonoteka.org/uploads/posts/2021-05/1621774166_23-phonoteka_org-p-fon-religiya-islam-24.jpg', title: "Event"}, {id: 3, imgLink: 'https://m.media-amazon.com/images/M/MV5BNWZiYzE0NzAtNGEyZS00ZjAwLTkzNWYtYTA3NWFhOGE2OTBjXkEyXkFqcGdeQXVyNTU4NjY5MzM@._V1_.jpg', title: "Happy Day!"}]
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