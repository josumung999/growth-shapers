import Image from 'next/image';
import React, { Fragment } from 'react'
import { FormattedMessage } from 'react-intl';

const Hero = () => {
  return (
    <Fragment>
      {/* Trying a new design for the hero section */}
      <section className="relative w-full top-0 left-0 -mt-16">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <h2 className='font-semibold text-white text-sm lg:text-xl my-4 text-center'>
              <FormattedMessage id="page.home.hero.title" />
            </h2>
            <h1 className='font-black text-white text-5xl lg:text-8xl my-6 text-center'>
              <FormattedMessage id="page.home.hero.description" />
            </h1>
            <div className='my-8 text-center'>
              <a href="#" className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-teal-700 rounded-lg bg-white hover:ring-4 hover:ring-teal-300 dark:hover:ring-teal-900">
                <FormattedMessage id="page.home.hero.cta1" />
                <svg className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
              </a>
            </div>
        </div>
        <div className="grid grid-cols-2 -z-50">
          <div className="bg-slate-900 h-screen">
          </div>
          <div className="bg-teal-600"> 
          </div>
        </div>
      </section>
    </Fragment>
  )
}

export default Hero