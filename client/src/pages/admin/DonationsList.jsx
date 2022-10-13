import React, {useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import  styles from "./admin.module.css"
import DonationsItem from './DonationsItem'

const DonationsList = () => {
    const dispatch = useDispatch();
    const donations = useSelector((state) => state.post.donations);

    useEffect(() => {
        (async () => {
          const response = await fetch('http://localhost:3001/donations', {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
            }
          })
    
          if (!response.ok)
            throw new Error(
              `Error: ${response.status} ${response.statusText}`
            )
    
          const data = await response.json();
          if (data.err) throw new Error(data.err);
          dispatch({ type: 'LOAD_DONATIONS', payload: data })
    
        })()
      }, [])

    return (
        <ul className={ styles.navComponent }>
          {
            donations.map(el => (
              <li key={ el.id } className={ styles.navComponent_item }> 
                <DonationsItem elem={ el }/>
              </li>
            ))
          }
        </ul>
      )
}

export default DonationsList
