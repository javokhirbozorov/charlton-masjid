import React from 'react'
import { Link } from 'react-router-dom';


import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import {
  Bars3Icon,
  ChartBarIcon,
  CursorArrowRaysIcon,
  Squares2X2Icon,
  XMarkIcon,
} from '@heroicons/react/24/outline'


const solutions = [
  {
    name: 'Home',
    href: '/',
    icon: ChartBarIcon,
  },
  {
    name: 'Events',
    href: '/events',
    icon: CursorArrowRaysIcon,
  },
  {
    name: 'About',
    href: '/about',
    icon: Squares2X2Icon,
  },
]


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}


export default function Example() {
  return (
    <>
      <Popover className="fixed w-full bg-white z-50 navbar">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="flex items-center justify-between border-b-2 border-gray-100 py-2 md:justify-start md:space-x-10">
            
            {/*  LOGO  */}
            <div className="flex justify-start lg:w-0 lg:flex-1">
              <a href="#">
                <img
                  className="h-20 w-auto"
                  src="https://t3.ftcdn.net/jpg/04/43/17/64/360_F_443176405_A1DXrBsvisTbxNR15g6mndn2DzYKwsXg.jpg"
                  alt=""
                />
              </a>
            </div>  

            {/*  BURGER BUTTON  */}
            <div className="-my-2 -mr-2 md:hidden">
              <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                <span className="sr-only">Open menu</span>
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              </Popover.Button>
            </div>
            
            {/*  DESCTOP MENU  */}
            <Popover.Group as="nav" className="hidden space-x-10 md:flex">
              {
                solutions.map(el => (
                  <Link to={ el.href } className="text-base font-medium text-gray-500 hover:text-gray-900">
                    { el.name }
                  </Link>
                ))
              }
            </Popover.Group>


            <div className="hidden items-center justify-end md:flex md:flex-1 lg:w-0">
              <Link to='/signup' className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900">
             
              Sign up
             
              </Link>

              <Link to='/login' className="ml-8 inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700">
             
                Login
             
              </Link>

              <Link to='/donations' className="ml-8 inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700">
             
                Donations
             
              </Link>
            </div>

          </div>
        </div>

        <Transition
          as={Fragment}
          enter="duration-200 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-100 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >

          {/*  BURGER MENU  */}
          <Popover.Panel focus className="absolute inset-x-0 top-0 origin-top-right transform p-2 transition md:hidden">
            <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
              <div className="px-5 pt-5 pb-6">
                <div className="flex items-center justify-between">
                  <div>
                    <img
                      className="h-20 w-auto"
                      src="https://t3.ftcdn.net/jpg/04/43/17/64/360_F_443176405_A1DXrBsvisTbxNR15g6mndn2DzYKwsXg.jpg"
                      alt="Your Company"
                    />
                  </div>
                  <div className="-mr-2">
                    <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                      <span className="sr-only">Close menu</span>
                      <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    </Popover.Button>
                  </div>
                </div>
                <div className="mt-6">
                  <nav className="grid gap-y-8">
                    {solutions.map((item) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        className="-m-3 flex items-center rounded-md p-3 hover:bg-gray-50"
                      >
                        <item.icon className="h-6 w-6 flex-shrink-0 text-indigo-600" aria-hidden="true" />
                        <span className="ml-3 text-base font-medium text-gray-900">{item.name}</span>
                      </Link>
                    ))}
                  </nav>
                </div>
              </div>
              <div className="space-y-6 py-6 px-5">
           
                <div>
                  <Link
                    to='/login'
                    className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
                  >
                    Login
                  </Link>
                  <p className="mt-6 text-center text-base font-medium text-gray-500">
                    Existing customer?{' '}
                    <Link 
                      to='/signup' 
                      className="text-indigo-600 hover:text-indigo-500"
                    >
                      Sign up
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </Popover.Panel>

        </Transition>
      </Popover>

      {/* <div style={{ paddingTop: '80px' }}>
        <Routes>
          <Route path='/' element={ <Home/> }></Route>
          <Route path='/events' element={ <Events/> }></Route>
          <Route path='/about' element={ <AboutPage/> }></Route>
        </Routes>
      </div> */}
    </>
  )
}




