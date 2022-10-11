import React from 'react'
import NewsItem from './NewsItems'
import styles from './admin.module.css'


const news = [
  { id: 1, date: '06.10.2022', descr: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia voluptatum officia, possimus sed, quibusdam, minus porro laudantium dicta distinctio consectetur ex natus aspernatur odio eos non facilis? A, officia optio?' },
  { id: 2, date: '06.10.2022', descr: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia voluptatum officia, possimus sed, quibusdam, minus porro laudantium dicta distinctio consectetur ex natus aspernatur odio eos non facilis? A, officia optio?' },
  { id: 3, date: '06.10.2022', descr: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia voluptatum officia, possimus sed, quibusdam, minus porro laudantium dicta distinctio consectetur ex natus aspernatur odio eos non facilis? A, officia optio?' },
  { id: 4, date: '06.10.2022', descr: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia voluptatum officia, possimus sed, quibusdam, minus porro laudantium dicta distinctio consectetur ex natus aspernatur odio eos non facilis? A, officia optio?' },
  { id: 5, date: '06.10.2022', descr: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia voluptatum officia, possimus sed, quibusdam, minus porro laudantium dicta distinctio consectetur ex natus aspernatur odio eos non facilis? A, officia optio?' },
  { id: 6, date: '06.10.2022', descr: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia voluptatum officia, possimus sed, quibusdam, minus porro laudantium dicta distinctio consectetur ex natus aspernatur odio eos non facilis? A, officia optio?' },
  { id: 7, date: '06.10.2022', descr: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia voluptatum officia, possimus sed, quibusdam, minus porro laudantium dicta distinctio consectetur ex natus aspernatur odio eos non facilis? A, officia optio?' },
  { id: 8, date: '06.10.2022', descr: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia voluptatum officia, possimus sed, quibusdam, minus porro laudantium dicta distinctio consectetur ex natus aspernatur odio eos non facilis? A, officia optio?' },
  { id: 9, date: '06.10.2022', descr: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia voluptatum officia, possimus sed, quibusdam, minus porro laudantium dicta distinctio consectetur ex natus aspernatur odio eos non facilis? A, officia optio?' },
  { id: 10, date: '06.10.2022', descr: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia voluptatum officia, possimus sed, quibusdam, minus porro laudantium dicta distinctio consectetur ex natus aspernatur odio eos non facilis? A, officia optio?' },
  { id: 11, date: '06.10.2022', descr: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia voluptatum officia, possimus sed, quibusdam, minus porro laudantium dicta distinctio consectetur ex natus aspernatur odio eos non facilis? A, officia optio?' },
]


const NewsList = () => {

  return (
    <ul className={ styles.navComponent }>
      {
        news.map(el => (
          <li key={ el.id } className={ styles.navComponent_item }> 
            <NewsItem news={ el }/>
          </li>
        ))
      }
    </ul>
  )
}

export default NewsList