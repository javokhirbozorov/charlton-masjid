import React from 'react'
import { useSelector } from 'react-redux'
import "./detailscomponent.css"

const DetailsComponent = () => {
    const element = useSelector((store) => store.one)
  return (
    <div className='elem'>
        <img src={element.imageSrc || element.imgLink} class="max-w-full h-auto" alt="..." />
        {element.date ? <h3>Date: {element.date}</h3>
            : ""
        }
        <h3>{element.name || element.title}</h3>
        <p>{element.imageAlt || element.body}</p>
    </div>
  )
}

export default DetailsComponent