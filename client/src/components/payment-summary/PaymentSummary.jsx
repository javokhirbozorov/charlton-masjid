import React from 'react'
import { useSelector } from 'react-redux'
import { store } from '../../store'

const PaymentSummary = () => {
    const summary = useSelector((store)=> store.paymentSummary)
    return (
        <div className='border-solid border-2 p-3'>
            <h1>Payment Summary</h1>
            <div className="container m-2">

                <div class="flex justify-center">
                    <div class=" flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg">
                        <img class=" w-full md:h-40 object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg" src={summary.imgLink} alt="" />
                        <div class="p-6 flex flex-col justify-start">
                            <h5 class="text-gray-900 text-xl font-medium mb-2">{summary.title}</h5>
                            <p class="text-gray-700 text-base mb-4">
                                Reached: {summary.donationTotalPercentage}%
                            </p>
                            <p class="text-gray-600 text-xs">Last updated 3 mins ago</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default PaymentSummary
