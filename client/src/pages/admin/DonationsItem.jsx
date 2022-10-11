import React from 'react'
import styles from './admin.module.css'
/* import { useDispatch, useSelector } from 'react-redux'*/

const DonationsItem = ({ elem }) => {

      /*   const dispatch = useDispatch();
  const donations = useSelector((state) => state.donations) */

  const DelDonate = async function (e) {
    const response = await fetch('http://localhost:3001/deldonate', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({id: e.target.id })
    })
    const result = response.json().then((data) => alert(data.delete))
  /*   const deldonate = donations.filter((el) => el.id !== e.target.id)
    dispatch({ type: 'LOAD_DONATIONS', payload: deldonate) */
    
}
  
  return (
    <>
      <div className={ styles.navComponent_item_date }></div>
      <p>{ elem.title }</p>
        <div className={ styles.navComponent_item_date }>Goal: { elem.goal }</div>
      <div className={ styles.navComponent_item_date }>Total: { elem.total }</div>
      <button id={ elem.id } onClick={DelDonate} className={ styles.navComponent_item_btn }> Delete </button> 
    </>
  )
}

export default DonationsItem