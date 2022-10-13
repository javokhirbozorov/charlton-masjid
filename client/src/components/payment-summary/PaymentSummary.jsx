import React from 'react'
import { useSelector } from 'react-redux'
import { store } from '../../store'

const PaymentSummary = () => {
    const summary = useSelector((store)=> store.post.paymentSummary)
    return (
        <div className='border-solid border-2 p-3'>
            <h1>Payment Summary</h1>
            <div className="container m-2">

                <div className="flex justify-center">
                    <div className=" flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg">
                        <img className=" w-full md:h-40 object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg" src={summary.imgLink} alt="" />
                        <div className="p-6 flex flex-col justify-start">
                            <h5 className="text-gray-900 text-xl font-medium mb-2">{summary.title}</h5>
                            <p className="text-gray-700 text-base mb-4">
                                Reached: {summary.donationTotalPercentage}%
                            </p>
                            <p>Donating: <span className="text-green-600 text-sm">£{summary.donationAmount}</span></p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default PaymentSummary
