import React, {useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import  styles from "./admin.module.css"
import EventsItem from './EventsItem'
import { Allevents } from '../../store/actions'

const EventsList = () => {
  const dispatch = useDispatch()
    const events = useSelector((state) => state.post.events)

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
    })()
  }, [])

  return (
    <ul className={ styles.navComponent }>
      {
        events.map(el => (
          <li key={ el.id } className={ styles.navComponent_item }> 
            <EventsItem elem={ el }/>
          </li>
        ))
      }
    </ul>
  )
}


export default EventsList