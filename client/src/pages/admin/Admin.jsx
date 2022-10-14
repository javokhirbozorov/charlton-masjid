import React, { useState, useEffect } from 'react'
import styles from './admin.module.css'

import { Link, Outlet } from 'react-router-dom'



const Admin = ({isAdmin}) => {
  
  const adminNav = isAdmin.username === "King" ? [
    { id: 1, href: 'events', name: 'Events' },
    { id: 2, href: 'news', name: 'News' },
    { id: 3, href: 'donates', name: 'Donates' },
    { id: 4, href: 'posts', name: 'Posts' },
    { id: 5, href: 'admins', name: 'Admins' },
  ] : 
  [
    { id: 1, href: 'events', name: 'Events' },
    { id: 2, href: 'news', name: 'News' },
    { id: 3, href: 'donates', name: 'Donates' },
    { id: 4, href: 'posts', name: 'Posts' },
  ]
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
        <Link to={ `/admin/${ addBtnLink }/new` } className={ styles.adminNav_addBtn }> + </Link>
        {isAdmin.username === "King" ?

          <Link to={ `/admin/admins/newAdmin` } className={ styles.adminNav_addBtn }> NewAdmin </Link>
          : " "
        }
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