import React from 'react'
import { useSelector } from 'react-redux'
import  styles from "./admin.module.css"
import Item from './Items'

const EventsList = () => {
    const events = useSelector((state) => state.events)

  return (
    <ul className={ styles.navComponent }>
      {
        events.map(el => (
          <li key={ el.id } className={ styles.navComponent_item }> 
            <Item elem={ el }/>
          </li>
        ))
      }
    </ul>
  )
}


export default EventsList