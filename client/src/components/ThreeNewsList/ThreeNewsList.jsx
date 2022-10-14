import React from 'react'
import { useSelector } from 'react-redux';
import "./threenewslist.css"
import { Link } from 'react-router-dom';

const ThreeNewsList = () => {
  const products = [{id: 1, imgLink: "https://img.prosports.kz/news/content//202210/252152_5877ed56216a6a8593bc366145865cfa.webp", title:"Tottenham vs Everton"}, {id:2, imgLink: 'https://media.az/file/articles/2022/10/13/1665656868_311712109_669257254554056_6845644138425853219_n.jpg', title: "Ilham Aliyev met with Iranian President Seyed"}, {id: 3, imgLink: 'https://cdnstatic.rg.ru/uploads/images/223/27/32/form_photoreport_imageid_600884_cf7c7d7e1daefd01635079999.jpg', title: "New part coming soon"}]
        
  return (
    <div  className='news text-center'>
        <div className=''>News</div>
    <div className='newslist'>
    

            {products.map((el, index) => 
            index < 3 ?
<div class='contmeleft' key={el.id}>
<img width='140px' src={el.imgLink} />
<p>{el.title}</p>
</div>
   : "" )}
  
    </div>
    <Link to="/news">
<button type="button" class="px-6 py-2.5 bg-green-500 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-green-600 hover:shadow-lg focus:bg-green-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-700 active:shadow-lg transition duration-150 ease-in-out">More</button>
</Link>
   </div>
  )
}

export default ThreeNewsList