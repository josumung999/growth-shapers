import React from 'react'

const Solutions = () => {
  return (
    <div className='bg-slate-50 dark:bg-slate-900 '>
      <div className='px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-16 lg:py-20'>
        <div className="flex items-center justify-center flex-col">
          <h3 className="text-base text-center font-semibold text-teal-700 dark:text-teal-600">Nos Solutions</h3>
          <h1 className='text-3xl text-center lg:text-4xl font-bold my-4 text-slate-800 dark:text-slate-400'>Vos Besoins, notre expertise</h1>
          <p className='text-sm text-center text-gray-400 dark:text-gray-200 font-normal'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus officiis<br /> voluptatem repellat est, delectus voluptates, quos itaque illum nesciunt
          </p>
        </div>
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4 mt-10">
          <div className="">
            <div className="bg-slate-800 text-white">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-32 w-32" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
            </div>
          </div>
          <div className="bg-teal-500">2</div>
          <div className="bg-teal-600">3</div>
          <div className="bg-teal-700">4</div>
        </div>
      </div>
    </div>
  )
}

export default Solutions