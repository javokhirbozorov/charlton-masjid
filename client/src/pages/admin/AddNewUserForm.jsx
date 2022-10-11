import React, { useState } from 'react'
import { LockClosedIcon } from '@heroicons/react/20/solid';

export default function AddNewUserForm() {

  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState("");

  const onEmail = (e) => {
    setEmail(e.target.value);
  }

  const onUserName = (e) => {
    setUserName(e.target.value);
  }

  const onPassword = (e) => {
    setPassword(e.target.value);
  }

  const AdminSubmit = async function (e) {
        e.preventDefault();
        const response = await fetch('http://localhost:3001/newadmin', {
          method: "POST",
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({username: userName, email: email, password: password})
        })
        const result = response.json().then((event) => alert(event.info) )
  }
  return (
        <>
            <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8">
        <div>

        <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
          New Admin
          </h2>
        </div>
        <form className="mt-8 space-y-6" type="submit" onSubmit={AdminSubmit}>
          <input type="hidden" name="remember" defaultValue="true" />
          <div className="-space-y-px rounded-md shadow-sm">
          <div>
              <label htmlFor="email-address" className="sr-only">
                User name
              </label>
              <input
                id="userName"
                onChange={onUserName}
                name="userName"
                type="text"
                required
                className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                placeholder="User name"
              />
            </div>
            <div>
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                onChange={onEmail}
                name="email"
                type="email"
                autoComplete="email"
                required
                className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                placeholder="Email address"
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                onChange={onPassword}
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                placeholder="Password"
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
          </div>

          <div>
            <button
              type="submit"
              className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                <LockClosedIcon className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true" />
              </span>
              Add New Admin
            </button>
          </div>
        </form>
      </div>
    </div>
        </>
  )
}
