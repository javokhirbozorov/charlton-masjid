import React from 'react'
import PaymentForm from '../../components/payment-form/PaymentForm'
import PaymentSummary from '../../components/payment-summary/PaymentSummary'

const Payment = () => {
  return (
    <>
    <h1 className='text-center font-bold' >Payment</h1>
    <div className="container flex flex-wrap w-screen">
        <PaymentForm/>
        <PaymentSummary/>
    </div>
    </>
  )
}

export default Payment
