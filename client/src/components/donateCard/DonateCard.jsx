import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

function DonateCard({ donation }) {

const dispatch = useDispatch();


const[donationAmount, setDonationAmount] = useState(0)
  //* Calculating the percentage of the current donation
  // 1000 => 100%
  //400 => x
  const donationTotalPercentage = Math.floor(donation.total * 100 / donation.goal)


  //* money input 
  const moneyInputHandler = (event)=>{
    setDonationAmount(event.target.value);
    console.log(donationAmount);

  }


  const donateBtnClick = () =>{
if(donationAmount >= 3){
  const imgLink = donation.imgLink;
  const title = donation.title
  const id = donation.id
  dispatch({type:'DONATE_SUM', payload:{imgLink,title,donationTotalPercentage,id,donationAmount}})
} else{
  alert('The minimum amount is £3')
}
   
  }

  return (

    <>


      <div id={donation.id} className="rounded-lg border-solid border-black shadow-lg mx-5  max-w-sm w-600 border-3 border-x-gray-800">
        <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
          <img className="rounded-t-lg" src={donation.imgLink} alt="" />
        </a>
        <div className="p-6">
          <h5 className="text-gray-900 text-xl font-medium mb-2">{donation.title}</h5>

          <label htmlFor="donationPercent">Reached <span className='font-bold'>{donationTotalPercentage}%</span> of the goal</label>
          <input className="w-full bg-gray-200 rounded-full" type="range" id='donationPercent' name='donationPercent' defaultValue={donationTotalPercentage} />
          {/* <div className={`bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-l-full w-${donationTotalPercentage}`}> {donationTotalPercentage}</div> */}

          <div className="flex justify-center">
            <div className="mb-3 xl:w-96">
              <div className="flex my-5">
                <span className='text-2xl mx-2'>£</span>
                <input  onChange={moneyInputHandler}
                  type="number"
                  min={0}
                  className="
        form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
      "
                  name='donationInput'
                  id="donationInput"
                  placeholder="ex:£100"

                />
              </div>

            </div>
          </div>
          <div onClick={donateBtnClick} className="donateBtns ">

            {
             donationAmount >=3 ?
              <Link to={'/payment'}
              type="button" className="my-10 inline-block px-6 py-2.5 bg-green-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-green-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">
                Donate
              </Link>
              :
              <button 
            type="button" className="my-10 inline-block px-6 py-2.5 bg-gray-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-green-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">
              Minimum £3
            </button>
            }

            <button
             type="button" className="inline-block px-6 py-2 border-2 border-blue-400 text-blue-400 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out">
              Info
              </button>
          
          </div>
        </div>
      </div>

    </>
  )
}

export default DonateCard


