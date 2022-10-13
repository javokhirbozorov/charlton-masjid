import React, { useState } from 'react'

const AddNewDonationForm = () => {
            
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const [img, setImg] = useState('https://ae01.alicdn.com/kf/HTB1VFlYXbr1gK0jSZR0q6zP8XXa5/-.jpg')
    const [goal, setGoal] = useState(0);
    const [total, setTotal] = useState(0);

    const OnTitle = (e) => {
        setTitle(e.target.value)
    }
    const onBody = (e) => {
        setBody(e.target.value)
    }

    const onGoal = (e) => {
        setGoal(e.target.value)
    }
    const OnTotal = (e) => {
        setTotal(e.target.value)
    }
    const onImg = (e) => {
      if(e.target.value){
        setImg(e.target.value);    
      }else{
        setImg("https://ae01.alicdn.com/kf/HTB1VFlYXbr1gK0jSZR0q6zP8XXa5/-.jpg")
      }
      }
    const DonationSubmit = async function (e) {
        e.preventDefault();
        const response = await fetch('http://localhost:3001/newdonation', {
          method: "POST",
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({title: title, body: body, imgLink: img, goal: goal, total: total, adminId: 1})
        })
        const result = response.json().then((event) => alert(event.info) )
       }
    return (
        <div style={{ overflow: 'scroll', height: '500px' }}>
             
          <div className="mt-5 md:col-span-2 md:mt-0">
            <form type="submit" onSubmit={DonationSubmit}>
              <div className="shadow sm:overflow-hidden sm:rounded-md">
                <div className="space-y-6 bg-white px-4 py-5 sm:p-6">
            
    
                  <div classname="mb-3 xl:w-96">
                  <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                      Title
                    </label>
    
                      <input
                          type="text"
                          onChange={OnTitle}
                          name="company-website"
                          id="company-website"
                          className="block w-full flex-1 rounded-none rounded-r-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        />
                  </div>
                  <div>
                    <label htmlFor="about" className="block text-sm font-medium text-gray-700">
                      Body
                    </label>
                    <div className="mt-1">
                      <textarea
                        id="about"
                        name="about"
                        onChange={onBody}
                        rows={3}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        defaultValue={''}
                      />
                    </div>
                  </div>
                  <div classname="mb-3 xl:w-96">
                  <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                      Goal
                    </label>
    
                      <input
                          type="number"
                          onChange={onGoal}
                          name="company-website"
                          id="company-website"
                          className="block w-full flex-1 rounded-none rounded-r-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        />
                  </div>
                  <div classname="mb-3 xl:w-96">
                  <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                      Total
                    </label>
    
                      <input
                          type="number"
                          onChange={OnTotal}
                          name="company-website"
                          id="company-website"
                          className="block w-full flex-1 rounded-none rounded-r-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        />
                  </div>
    
                  <div classname="mb-3 xl:w-96">
              <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                  Cover photo
                </label>

                  <input
                      type="text"
                      onChange={onImg}
                      name="company-website"
                      id="company-website"
                      className="block w-full flex-1 rounded-none rounded-r-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      placeholder='Get url photo'
                    />
              </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
                  <button
                    type="submit"
                    className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  >
                    Save
                  </button>
                </div>
              </div>
            </form>
          </div>
    
        </div>
      )
}

export default AddNewDonationForm