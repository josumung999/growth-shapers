import React from 'react'
import { FormattedMessage } from 'react-intl'

const Intro = () => {
  return (
    <div className="bg-slate-50 dark:bg-slate-900">
      {/* mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl */}
      <div className='px-4 py-16 md:px-24 lg:px-16 lg:py-20'>
        {/* max-w-xl lg:max-w-2xl  */}
        <div className='sm:text-center md:mx-auto mb-10 md:mb-20'>
          <h1 className="text-2xl lg:text-4xl font-semibold text-center text-slate-700 dark:text-slate-300">
            <FormattedMessage id="page.about.intro.title" />
          </h1>
          <p className="text-xl my-6 md:my-10 text-slate-500 dark:text-slate-200">
            <FormattedMessage id="page.about.intro.subtitle" />
          </p>
        </div>
      </div>
    </div>
  )
}

export default Intro