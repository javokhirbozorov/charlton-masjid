import React from 'react'
import styles from './admin.module.css'
/* import { useDispatch, useSelector } from 'react-redux'
import { Allnews } from '../../store/actions' */


const NewsItem = ({ elem }) => {

  /*   const dispatch = useDispatch();
  const news = useSelector((state) => state.news) */

  const DelNews = async function (e) {
    const response = await fetch('http://localhost:3001/delnews', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({id: e.target.id })
    })
    const result = response.json().then((data) => alert(data.delete))
  /*   const delnews = news.filter((el) => el.id !== e.target.id)
    dispatch(Allnews(delnews)) */
    
}

  return (
    <>
      <div className={ styles.navComponent_item_date }>{ elem.createAt }</div>
      <p>{ elem.title }</p>
      <button id={ elem.id } onClick={DelNews} className={ styles.navComponent_item_btn }> Delete </button> 
    </>
  )
}

export default NewsItem