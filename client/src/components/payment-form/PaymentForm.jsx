import React from 'react'

const PaymentForm = () => {
    return (
        <div className='border-solid border-2 w-96' >
            Payment Form

            <div className="hidden sm:block" aria-hidden="true">
                <div className="py-5">
                    <div className="border-t border-gray-200" />
                </div>
            </div>

            <div className="mt-10 sm:mt-0">


                <div className="mt-5 md:col-span-2 md:mt-0">
                    <form action="#" method="POST">
                        <div className="overflow-hidden shadow sm:rounded-md">
                            <div className="bg-white px-4 py-5 sm:p-6">
                                <div className="grid grid-cols-6 gap-6">
                                    <div className="col-span-6 sm:col-span-6">
                                        <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                                            Name on card
                                        </label>
                                        <input
                                            type="text"
                                            name="first-name"
                                            id="first-name"
                                            autoComplete="given-name"
                                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 sm:text-sm"
                                        />
                                    </div>



                                    <div className="col-span-6 sm:col-span-6">
                                        <label htmlFor="email-address" className="block text-sm font-medium text-gray-700">
                                            Email address
                                        </label>
                                        <input
                                            type="text"
                                            name="email-address"
                                            id="email-address"
                                            autoComplete="email"
                                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 sm:text-sm"
                                        />
                                    </div>


                                    <div className="col-span-6 sm:col-span-4">
                                        <label htmlFor="card-exp" className="block text-sm font-medium text-gray-700">
                                            Exp.
                                        </label>
                                        <input
                                            type="text"
                                            name="card-exp"
                                            maxLength={4}
                                            id="card-exp"
                                            autoComplete="exp"
                                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 sm:text-sm"
                                        />
                                    </div>
                                    <div className="col-span-6 sm:col-span-2">
                                        <label htmlFor="card-cvv" className="block text-sm font-medium text-gray-700">
                                            CVV
                                        </label>
                                        <input
                                            type="text"
                                            name="card-cvv"
                                            min={0}
                                            maxLength={3}
                                            id="card-cvv"
                                            placeholder='ex:123'
                                            autoComplete="exp"
                                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 sm:text-sm"
                                        />
                                    </div>



                                </div>
                            </div>
                            <div className="bg-gray-50 px-4 py-3 text-center">
                                <button
                                    type="submit"
                                    className="w-80 inline-flex justify-center rounded-md border border-transparent bg-green-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
                                >
                                    Pay
                                </button>
                            </div>
                        </div>
                    </form>
                </div>

            </div>

        </div>
    )
}

export default PaymentForm
