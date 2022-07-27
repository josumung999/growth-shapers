import Link from 'next/link'
import React from 'react'
import Image from "next/image"
import { FormattedMessage } from 'react-intl'

const Mission = () => {
  return (
    <div>
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-16 lg:py-20">
      <div className="grid gap-10 lg:grid-cols-2">
        <div className="lg:pr-16">
          <h5 className="mb-4 text-4xl text-gray-700 dark:text-gray-300 font-extrabold leading-none ease-in duration-300">
            <FormattedMessage id="page.home.mission.title" />
          </h5>
          <p className="mb-6 text-gray-900 dark:text-gray-300">
           <FormattedMessage id="page.home.mission.description" />
          </p>
          <hr className="mb-5 border-gray-300" />
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