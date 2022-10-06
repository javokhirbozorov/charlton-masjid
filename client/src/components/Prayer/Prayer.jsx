import React from 'react'
import { useEffect, useState } from 'react';
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
    <div className="w-1/4 flex justify-center">
    <div className="fixed py-16 px-4">
      <div className="text-center aspect-w-1 aspect-h-1 w-56 h-40 overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8" style={{ padding: '5px' }}>
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
    </div>
  </div>
  )
}

export default Prayer