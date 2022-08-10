import Image from 'next/image';
import React, { Fragment } from 'react'
import { FormattedMessage } from 'react-intl';

const Hero = () => {
  return (
    <Fragment>
      {/* Trying a new design for the hero section */}
      <section className="relative w-full top-0 left-0 -mt-16">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <h2 className='font-semibold text-slate-700 dark:text-white text-sm lg:text-xl my-4 text-center'>
              <FormattedMessage id="page.home.hero.title" />
            </h2>
            <h1 className='font-black text-slate-700 dark:text-white text-5xl lg:text-8xl my-6 text-center'>
              <FormattedMessage id="page.home.hero.description" />
            </h1>
            <div className='my-8 text-center'>
              <a href="#"
                className="
                  inline-block
                  py-4
                  px-6
                  md:px-9
                  lg:px-6
                  xl:px-9
                  rounded
                  text-base
                  font-medium
                  bg-[#13C296]
                  transition
                  hover:bg-opacity-90
                text-white
                  my-1
                "
              >
                <FormattedMessage id="page.home.hero.cta1" />
              </a>
            </div>
        </div>
        <div className="grid grid-cols-2 -z-50">
          <div className="bg-slate-200 dark:bg-slate-900 h-screen">
          </div>
          <div className="bg-teal-200 dark:bg-teal-600"> 
          </div>
        </div>
      </section>
    </Fragment>
  )
}

export default Hero