import React from 'react'
import Image from 'next/image';
import { FormattedMessage } from 'react-intl';

const Footer = () => {
  return (
    <div className="bg-teal-400 dark:bg-slate-800 relative overflow-hidden py-16 px-4 md:p-[70px] z-10">
      <div className="container">

        <div className='grid lg:grid-cols-3 gap-4'>
          <div className="">
            <div className='mb-4'>
              <Image alt="Growth Shapers Logo" className="" src="/images/logo.png" width="200" height="60" />
            </div>
            <p className='text-sm mr-20 text-slate-700 dark:text-slate-300 mb-8'>
              <FormattedMessage id="layout.footer.about" />
            </p>
            <h3 className='inline-flex text-slate-700 dark:text-slate-300 font-semibold text-lg'>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3 text-slate-700 dark:text-teal-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 3l-6 6m0 0V4m0 5h5M5 3a2 2 0 00-2 2v1c0 8.284 6.716 15 15 15h1a2 2 0 002-2v-3.28a1 1 0 00-.684-.948l-4.493-1.498a1 1 0 00-1.21.502l-1.13 2.257a11.042 11.042 0 01-5.516-5.517l2.257-1.128a1 1 0 00.502-1.21L9.228 3.683A1 1 0 008.279 3H5z" />
              </svg>
              + 257 79 283 483
            </h3>
          </div>
          <div className="bg-teal-400">
            What&apos;s
          </div>
          <div className="bg-slate-900">
            Up to ?
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer