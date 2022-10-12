import React from 'react'
import styles from './admin.module.css'
/* import { useDispatch, useSelector } from 'react-redux'
import { Allevents } from '../../store/actions' */


const EventsItem = ({ elem }) => {

    /*   const dispatch = useDispatch();
  const events = useSelector((state) => state.events) */

  const DelEvent = async function (e) {
    const response = await fetch('http://localhost:3001/delevent', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({id: e.target.id })
    })
    const result = response.json().then((data) => alert(data.delete))
  /*   const delevent = events.filter((el) => el.id !== e.target.id)
    dispatch(Allevents(delevent)) */
    
}
  
  return (
    <>
      <div className={ styles.navComponent_item_date }>{ elem.date }</div>
      <p>{ elem.title }</p>
      <button id={ elem.id } onClick={DelEvent} className={ styles.navComponent_item_btn }> Delete </button> 
    </>
  )
}

export default EventsItem