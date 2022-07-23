import Image from 'next/image';
import React from 'react'
import { FormattedMessage } from 'react-intl';

const Hero = () => {
  return (
    <section className="z-20 relative bg-gray-100 dark:bg-slate-900">
      <div className="pt-24 pb-32 px-4 flex justify-between items-center flex-col lg:flex-row">
        <div className='flex flex-col items-center lg:block'>
          <h2 className='font-bold text-slate-600 dark:text-slate-400 text-xl lg:text-3xl my-4'>
            <FormattedMessage id="page.home.hero.title" />
          </h2>
          <h1 className='font-black text-slate-900 dark:text-slate-300 text-5xl lg:text-8xl my-6'>
            <FormattedMessage id="page.home.hero.description" />
          </h1>
          <div className='my-8'>
            <a href="#" className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-teal-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
                  <FormattedMessage id="page.home.hero.cta1" />
                  <svg className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
              </a>
              <a href="#" className="hidden lg:inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                <FormattedMessage id="page.home.hero.cta2" />
              </a> 

          </div>
        </div>
        <div className="w-full sm:w-5/6 lg:w-1/2 mt-16 lg:mt-0 lg:pl-8">
            <Image src="/images/hero-light.png" alt='Hero Image' width="420" height="594" />
        </div>
      </div>
    </section>
  )
}

export default Hero