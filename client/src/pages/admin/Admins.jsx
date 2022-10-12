import React from 'react'
import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Alladmins } from '../../store/actions'
import styles from './admin.module.css'

const Admins = () => {
    const dispatch = useDispatch();
    const [admins, setAdmins] = useState([]);

    useEffect(() => {
        (async () => {
          const res = await fetch('http://localhost:3001/admins', {
            method: "GET",
            headers: {
              'Content-Type':'application/json'
            }
          });
          const data = await res.json()
            dispatch(Alladmins(data))
          setAdmins(data)
        })()
              }, [])

              const DelAdmin = async function (e) {
                const response = await fetch('http://localhost:3001/deladmin', {
                  method: "POST",
                  headers: {
                    'Content-Type': 'application/json',
                  },
                  body: JSON.stringify({id: e.target.id })
                })
                const result = response.json().then((data) => alert(data.delete))
                const deladmin = admins.filter((el) => el.id !== e.target.id)
                setAdmins(deladmin);
                dispatch(Alladmins(deladmin)); 
              }
            
  return (
    <ul className={ styles.navComponent }>
      {
        admins.map(el => (
          <li key={ el.id } className={ styles.navComponent_item }> 
           <div className={ styles.navComponent_item_date }>{ el.id }</div>
      <p>{ el.username }</p>
      <button id={ el.id } onClick={DelAdmin} className={ styles.navComponent_item_btn }> Delete </button> 
          </li>
        ))
      }
    </ul>
  )
}

export default Admins