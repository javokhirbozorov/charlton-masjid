import React from 'react'
import styles from './admin.module.css'


const Item = ({ elem }) => {
  
  return (
    <>
      <div className={ styles.navComponent_item_date }>{ elem.date }</div>
      <p>{ elem.body }</p>
      <button id={ elem.id } className={ styles.navComponent_item_btn }> Delete </button> 
    </>
  )
}

export default Item