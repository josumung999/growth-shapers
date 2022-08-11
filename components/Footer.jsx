import React from 'react'
import Image from 'next/image';
import { FormattedMessage, useIntl } from 'react-intl';
import { RiFacebookFill, RiInstagramFill, RiLinkedinFill, RiTwitterFill } from 'react-icons/ri'

const Footer = () => { 
  
  const intl = useIntl();

  const menuItems = intl.messages['page.menuItems'];

  return (
    <div className="bg-teal-300 dark:bg-slate-800 relative overflow-hidden py-16 px-4 md:p-[70px] z-10">
      <div className="container">

        <div className='grid lg:grid-cols-3 gap-4'>
          <div className="">
            <div className='mb-4'>
              <Image alt="Growth Shapers Logo" className="" src="/images/logo.png" width="220" height="72" />
            </div>
            <p className='text-sm text-justify md:mr-16 text-slate-700 dark:text-slate-300 mb-8'>
              <FormattedMessage id="layout.footer.about" />
            </p>
            <h3 className='inline-flex text-slate-700 dark:text-slate-300 font-semibold text-lg'>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3 text-slate-700 dark:text-teal-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 3l-6 6m0 0V4m0 5h5M5 3a2 2 0 00-2 2v1c0 8.284 6.716 15 15 15h1a2 2 0 002-2v-3.28a1 1 0 00-.684-.948l-4.493-1.498a1 1 0 00-1.21.502l-1.13 2.257a11.042 11.042 0 01-5.516-5.517l2.257-1.128a1 1 0 00.502-1.21L9.228 3.683A1 1 0 008.279 3H5z" />
              </svg>
              + 257 79 283 483
            </h3>
          </div>
          <div className="flex flex-row mt-4">
            <div className="basis-1/2">
              <h3 className='text-lg font-semibold text-slate-700 dark:text-slate-300'>
                <FormattedMessage id="layout.footer.menu1.title" />
              </h3>
              <ul className="list-none mt-4">
                {menuItems.map((item) => 
                <li key={item.id} className="my-2">
                  <a className="text-gray-600 hover:text-xl text-lg  dark:text-gray-300" href={item.link}>
                    {item.text}
                  </a>
                </li>
                )}
              </ul>
            </div>
            <div className="basis-1/2">
              <h3 className='text-lg font-semibold text-slate-700 dark:text-slate-300'>
                <FormattedMessage id="layout.footer.menu2.title" />
              </h3>
              <ul className="list-none mt-4">
                {menuItems.map((item) => 
                <li key={item.id} className="my-2">
                  <a className="text-gray-600 hover:text-xl text-lg  dark:text-gray-300" href={item.link}>
                    {item.text}
                  </a>
                </li>
                )}
              </ul>
            </div>
          </div>
          <div className="mt-4">
            <h3 className='text-xl font-semibold text-slate-700 dark:text-slate-300'>
              <FormattedMessage id="layout.footer.social.title" />
            </h3>
            <div className="inline-flex my-8">
              <span className='w-8 h-8 border border-slate-300 dark:border-teal-600 text-slate-700 dark:text-teal-500 hover:bg-slate-700 hover:text-slate-100 dark:hover:bg-teal-600  dark:hover:text-slate-100 rounded-full flex justify-center items-center mr-3'>
                <RiFacebookFill />
              </span>
              <span className='w-8 h-8 border border-slate-300 dark:border-teal-600 text-slate-700 dark:text-teal-500 hover:bg-slate-700 hover:text-slate-100 dark:hover:bg-teal-600  dark:hover:text-slate-100 rounded-full flex justify-center items-center mr-3'>
                <RiInstagramFill />
              </span>
              <span className='w-8 h-8 border border-slate-300 dark:border-teal-600 text-slate-700 dark:text-teal-500 hover:bg-slate-700 hover:text-slate-100 dark:hover:bg-teal-600  dark:hover:text-slate-100 rounded-full flex justify-center items-center mr-3'>
                <RiLinkedinFill />
              </span>
              <span className='w-8 h-8 border border-slate-300 dark:border-teal-600 text-slate-700 dark:text-teal-500 hover:bg-slate-700 hover:text-slate-100 dark:hover:bg-teal-600  dark:hover:text-slate-100 rounded-full flex justify-center items-center mr-3'>
                <RiTwitterFill />
              </span>
            </div>
            <p className='text-base font-medium text-slate-600 dark:text-slate-300'>
              &copy; {new Date().getFullYear()} Growth Shapers
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer