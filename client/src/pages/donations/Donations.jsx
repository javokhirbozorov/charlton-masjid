import React from 'react'
import Carousel from '../../components/carousel/Carousel'
import DonateCard from '../../components/donateCard/DonateCard'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'


const Donations = () => {
  const donationList = useSelector((store) => store.donations)
  console.log('😀😀😀',donationList);

  const dispatch = useDispatch();
  React.useEffect(() =>{
      (async() =>{
              const response = await fetch('http://localhost:3001/donations', {
                  method:'GET',
                  headers:{
                      'Content-Type': 'application/json',
                  }
              })
      
              if(!response.ok)
              throw new Error(
                  `Error: ${response.status} ${response.statusText}`
              )
      
              const data = await response.json();
              if(data.err) throw new Error(data.err);
              console.log('😀😀😀',data);
              dispatch({type:'LOAD_DONATIONS', payload:data})
  
       } )()
      },[dispatch])
  return (
    <>
   <h1> Donations</h1>

    <Carousel/>
    <DonateCard/>
    </>
  )
}

export default Donations
