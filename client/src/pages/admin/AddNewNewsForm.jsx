import React, {useState} from 'react'

const AddNewNewsForm = () => {

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [img, setImg] = useState('');

    const OnTitle = (e) => {
        setTitle(e.target.value);
    }

    const onBody = (e) => {
        setBody(e.target.value);
    }

   const onImg = (e) => {
        setImg(e.target.value);    
    }

    const NewsSubmit = async function (e) {
        e.preventDefault();
        const response = await fetch('http://localhost:3001/newnews', {
          method: "POST",
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({title: title, body: body, imgLink: img, adminId: "1" })
        })
        const result = response.json().then((event) => alert(event.info) )
       }

    return (
        <div style={{ overflow: 'scroll', height: '500px' }}>
             
          <div className="mt-5 md:col-span-2 md:mt-0">
            <form type="submit" onSubmit={NewsSubmit}>
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
    
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Cover photo</label>
                    <div className="mt-1 flex justify-center rounded-md border-2 border-dashed border-gray-300 px-6 pt-5 pb-6">
                      <div className="space-y-1 text-center">
                        <svg
                          className="mx-auto h-12 w-12 text-gray-400"
                          stroke="currentColor"
                          fill="none"
                          viewBox="0 0 48 48"
                          aria-hidden="true"
                        >
                          <path
                            d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        <div className="flex text-sm text-gray-600">
                          <label
                            htmlFor="file-upload"
                            className="relative cursor-pointer rounded-md bg-white font-medium text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:text-indigo-500"
                          >
                            <span>Upload a file</span>
                            <input id="file-upload" name="file-upload" type="file" className="sr-only" onChange={onImg} />
                          </label>
                          <p className="pl-1">or drag and drop</p>
                        </div>
                        <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                      </div>
                    </div>
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
export default AddNewNewsForm