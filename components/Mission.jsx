import Link from 'next/link'
import React from 'react'
import Image from "next/image"
import { FormattedMessage } from 'react-intl'

const Mission = () => {
  return (
    <div>
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-16 lg:py-20">
      <div className="grid gap-10 lg:grid-cols-2">
        <div className="lg:pr-10">
          <h5 className="mb-4 text-4xl text-gray-700 dark:text-gray-300 font-extrabold leading-none ease-in duration-300">
            <FormattedMessage id="page.home.mission.title" />
          </h5>
          <p className="mb-6 text-gray-900 dark:text-gray-300">
           <FormattedMessage id="page.home.mission.description" />
          </p>
          <hr className="mb-5 border-gray-300" />
          <div className="my-8">
            <a href="#" className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-teal-700 hover:bg-teal-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
              <FormattedMessage id="page.home.hero.cta2" />
              <svg className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
            </a>
          </div>
        </div>
        <div className='flex align-center justify-center'>
          <Image src="/images/target.png" alt="" width="400" height="400" />
        </div>
      </div>
    </div>
    </div>
  )
}

export default Mission