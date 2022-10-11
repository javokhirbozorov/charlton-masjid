import React, { useState, useEffect } from 'react'
import styles from './admin.module.css'

import { Link, Outlet } from 'react-router-dom'

const adminNav = [
  { id: 1, href: 'events', name: 'Events' },
  { id: 2, href: 'news', name: 'News' },
  { id: 3, href: 'donates', name: 'Donates' },
  { id: 4, href: 'admins', name: 'Admins' },
]


const Admin = () => {

  const [addBtnLink, setAddBtnLink] = useState();

  const clickHandle = (e) => setAddBtnLink(e.target.id)

  useEffect(() => {
    setAddBtnLink('events')
  }, [])

  return (

    <div className={ styles.container }>


      {/*  ADMIN NAV  */}
      <div className={ styles.adminNav_wrap }>
        <ul className={ styles.adminNav }>
          {
            adminNav.map(el => (
              <Link 
                id={ el.href } 
                onClick={ clickHandle } 
                key={ el.id } to={ `/admin/${el.href}` } 
                className={ el.href === addBtnLink ? [styles.adminNav_item, styles.current_item].join(' ') : styles.adminNav_item }
              >
                { el.name }
              </Link>
            ))
          }
        </ul>
        <Link to={ `/admin/${ addBtnLink }/newEvent` } className={ styles.adminNav_addBtn }> + </Link>
      </div>  


      {/*  COMPONENT SPACE  */}
      <div className={ styles.navComponent_wrap }>
        <div className={ styles.filter }> Filter </div>
     
        <Outlet/>

      </div>

    </div>
  )
}

export default Admin