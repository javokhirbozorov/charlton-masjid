import React, {useEffect} from 'react'
import NewsItem from './NewsItem'
import styles from './admin.module.css'
import { useSelector, useDispatch } from 'react-redux'
import { Allnews } from '../../store/actions'





const NewsList = () => {
    const dispatch = useDispatch();
    const news = useSelector((state) => state.news)

    useEffect(() => {
      (async () => {
        const res = await fetch('http://localhost:3001/news', {
          method: "GET",
          headers: {
            'Content-Type':'application/json'
          }
        });
        const data = await res.json()
          dispatch(Allnews(data))
      })()
            }, [])

  return (
    <ul className={ styles.navComponent }>
      {
        news.map(el => (
          <li key={ el.id } className={ styles.navComponent_item }> 
            <NewsItem elem={ el }/>
          </li>
        ))
      }
    </ul>
  )
}

export default NewsList