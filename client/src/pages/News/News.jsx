import React from 'react'
import NewsCard from '../../components/NewsCard/NewsCard'
import './news.css'

const News = () => {
    const allposts = [{ id: 1 , title: "TItle", body:"No information given", imgLink: 'https://mediasole.ru/data/images/412/412388/23stunning-landscape-view-argentina.jpg' } , {id: 2, title: "hello" , body: "world", imgLink:"https://bugaga.ru/uploads/posts/2013-11/1385069022_zhivopisnye-mesta-2.jpg" }, {id: 3, title: "Post", body: "it'is Post", imgLink: 'https://storge.pic2.me/cm/5120x2880/816/58487211bf104.jpg'} ]
    return (
      <div className='news'>
          {allposts.map((el) => 
          <NewsCard news={el}/> )}
      </div>
            )
   }

export default News