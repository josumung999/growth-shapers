import React from 'react'
import { FormattedMessage } from 'react-intl'

const Solutions = () => {
  return (
    <div className='bg-slate-50 dark:bg-slate-900 '>
      <div data-aos={"flip-up"} data-aos-duration={2000} className='px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-16 lg:py-20'>
        <div className="flex items-center justify-center flex-col">
          <h3 className="text-base text-center font-semibold text-teal-700 dark:text-teal-600">
            <FormattedMessage id="page.home.solutions.highlight" />
          </h3>
          <h1 className='text-3xl text-center lg:text-4xl font-bold my-4 text-slate-800 dark:text-slate-400'>
            <FormattedMessage id="page.home.solutions.title" />
          </h1>
          <p className='text-sm text-center text-slate-400 dark:text-slate-200 font-normal'>
            <FormattedMessage id="page.home.solutions.para" values={{br: <br/>}} />
          </p>
        </div>
        <div className="grid gap-10 lg:grid-cols-3 mt-10">
          <div id="card1" className="flex flex-col items-center justify-center">
            <div id="cardImage" className="bg-slate-800 text-slate-200 w-28 h-28 flex items-center justify-center rounded-2xl mb-10">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
            </div>
            <div id="cardContent">
              <h3 className="text-2xl text-center font-bold text-teal-700 dark:text-slate-300 mb-4">
                <FormattedMessage id="page.home.solutions.growth.title" />
              </h3>
              <p className='text-sm text-center text-slate-500 dark:text-slate-200 font-normal'>
              <FormattedMessage id="page.home.solutions.growth.desc" values={{br: <br/>}} />
              </p>
            </div>
          </div>
          <div id="card2" className="flex flex-col items-center justify-center">
            <div id="cardImage" className="bg-slate-800 text-slate-200 w-28 h-28 flex items-center justify-center rounded-2xl mb-10">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
              </svg>
            </div>
            <div id="cardContent">
              <h3 className="text-2xl text-center font-bold text-teal-700 dark:text-slate-300 mb-4">
                <FormattedMessage id="page.home.solutions.branding.title" />
              </h3>
              <p className='text-sm text-center text-slate-500 dark:text-slate-200 font-normal'>
              <FormattedMessage id="page.home.solutions.branding.desc" values={{ br: <br /> }}/>
              </p>
            </div>
          </div>
          {/* <div id="card3" className="flex flex-col items-center justify-center">
            <div id="cardImage" className="bg-slate-800 text-slate-200 w-28 h-28 flex items-center justify-center rounded-2xl mb-10">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <div id="cardContent">
              <h3 className="text-2xl text-center font-bold text-teal-700 dark:text-slate-300 mb-4">Infrastructure</h3>
              <p className='text-sm text-center text-slate-500 dark:text-slate-200 font-normal'>
              Launch Paid Media that drives MQLs fast. Run SEO programs that get real results. Create Email Marketing that engages future customers.
              </p>
            </div>
          </div> */}
          <div id="card4" className="flex flex-col items-center justify-center">
            <div id="cardImage" className="bg-slate-800 text-slate-200 w-28 h-28 flex items-center justify-center rounded-2xl mb-10">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
              </svg>
            </div>
            <div id="cardContent">
              <h3 className="text-2xl text-center font-bold text-teal-700 dark:text-slate-300 mb-4">
                <FormattedMessage id="page.home.solutions.design.title" />
              </h3>
              <p className='text-sm text-center text-slate-500 dark:text-slate-200 font-normal'>
                <FormattedMessage id="page.home.solutions.design.desc" values={{ br: <br /> }} />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Solutions