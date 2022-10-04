import React from 'react'
import PostCard from '../../components/postCard/PostCard'

const Posts = () => {
        const allposts = [{ id: 1 , title: "TItle", body:"No information given", imgLink: 'https://mediasole.ru/data/images/412/412388/23stunning-landscape-view-argentina.jpg' } , {id: 2, title: "hello" , body: "world", imgLink:"https://bugaga.ru/uploads/posts/2013-11/1385069022_zhivopisnye-mesta-2.jpg" }]
  return (
    <div>
        {allposts.map((el) => 
        <PostCard post={el}/>)}
  </div>
  )
}

export default Posts