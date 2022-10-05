import React from 'react'
import './postcard.css'

const PostCard = ({post}) => {
  return(
    <div key={post.id} className="flex justify-center" id='postcard'>
  <div className="rounded-lg shadow-lg bg-white max-w-sm">
      <img className="rounded-t-lg" src={post.imgLink} alt=""/>
    <div  className="p-6 bg-green-200">
      <h5  className="text-gray-900 text-xl font-medium mb-2">{post.title}</h5>
      <p className="text-gray-700 text-base mb-4">
        {post.body}
      </p>
      <button type="button" className=" inline-block px-6 py-2.5 bg-yellow-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-yellow-700 hover:shadow-lg focus:bg-yellow-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-yellow-800 active:shadow-lg transition duration-150 ease-in-out">Button</button>
    </div>
  </div>
</div>
)  
}

export default PostCard