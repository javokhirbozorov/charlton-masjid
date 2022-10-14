import React from 'react'
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import "./prayer.css"


const Prayer = () => {

    const [times, setTimes] = useState({})

  useEffect(() => {
    (async () => {
      const res = await fetch('https://www.londonprayertimes.com/api/times/?format=json&key=3b156bf9-73f0-4ed5-a1e2-e157c2743bc5')
      const data = await res.json();
      console.log('data', data)
      setTimes(data)
    })()
    
  }, []) ;

  return (
    <div className="w-3/4 flex justify-center text-center">
    <div className="fixed py-16 px-4">
      <div className="text-center aspect-w-1 aspect-h-1 w-56 h-40 overflow-hidden rounded-lg xl:aspect-w-7 xl:aspect-h-8" style={{ padding: '5px' }} id="pr">
        <p className="mt-1 text-lg font-medium text-gray-900">Prayer time</p>
          <div className='prayer'>
              <div>Fajr</div>
              <div>{times.fajr}</div>
          </div>
          <div className='prayer'>
              <div>Dhuhr</div>
              <div>{times.dhuhr}</div>
          </div>
          <div className='prayer'>
              <div>Asr</div>
              <div>{times.asr}</div>
          </div>
          <div className='prayer'>
              <div>Magrib</div>
              <div>{times.magrib}</div>
          </div>
          <div className='prayer'>
              <div>Isha</div>
              <div>{times.isha}</div>
          </div>
      </div>
      <Link to="/donations">
          <button type="button" className="inline-block px-6 py-2.5 bg-yellow-500 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-yellow-600 hover:shadow-lg focus:bg-yellow-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-yellow-700 active:shadow-lg transition duration-150 ease-in-out">Donations</button>
      </Link>
    </div>
  </div>
  )
}

export default Prayer
