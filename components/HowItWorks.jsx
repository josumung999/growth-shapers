import React from 'react';
import { FormattedMessage } from 'react-intl';

const HowItWorks = () => {
  return (
    <div className="bg-white dark:bg-slate-700">
      <div className='px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-16 lg:py-20'>
        <div className='max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-20'>
          <h1 className="text-2xl lg:text-4xl font-semibold text-center text-slate-700 dark:text-slate-300">
            <FormattedMessage id="page.home.how.title" />
          </h1>
        </div>
        <div className="grid gap-10 lg:grid-cols-4 sm:grid-cols-2">
          <div>
            <div className="flex items-center justify-between mb-6">
              <p className="text-2xl font-bold text-slate-700 dark:text-slate-200">
                <FormattedMessage id="page.home.how.step1.title" />
              </p>
              <svg
                className="w-6 text-teal-700 dark:text-teal-300 transform rotate-90 sm:rotate-0"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                viewBox="0 0 24 24"
              >
                <line
                  fill="none"
                  strokeMiterlimit="10"
                  x1="2"
                  y1="12"
                  x2="22"
                  y2="12"
                />
                <polyline
                  fill="none"
                  strokeMiterlimit="10"
                  points="15,5 22,12 15,19 "
                />
              </svg>
            </div>
            <p className="text-slate-600 dark:text-slate-400">
              <FormattedMessage id="page.home.how.step1.desc" />
            </p>
          </div>
          <div>
            <div className="flex items-center justify-between mb-6">
              <p className="text-2xl font-bold text-slate-700 dark:text-slate-200">
              <FormattedMessage id="page.home.how.step2.title" />
              </p>
              <svg
                className="w-6 text-teal-700 dark:text-teal-300 transform rotate-90 sm:rotate-0"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                viewBox="0 0 24 24"
              >
                <line
                  fill="none"
                  strokeMiterlimit="10"
                  x1="2"
                  y1="12"
                  x2="22"
                  y2="12"
                />
                <polyline
                  fill="none"
                  strokeMiterlimit="10"
                  points="15,5 22,12 15,19 "
                />
              </svg>
            </div>
            <p className="text-slate-600 dark:text-slate-400">
              <FormattedMessage id="page.home.how.step2.desc" />
            </p>
          </div>
          <div>
            <div className="flex items-center justify-between mb-6">
              <p className="text-2xl font-bold text-slate-700 dark:text-slate-200">
                <FormattedMessage id="page.home.how.step3.title" />
              </p>
              <svg
                className="w-6 text-teal-700  dark:text-teal-300 transform rotate-90 sm:rotate-0"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                viewBox="0 0 24 24"
              >
                <line
                  fill="none"
                  strokeMiterlimit="10"
                  x1="2"
                  y1="12"
                  x2="22"
                  y2="12"
                />
                <polyline
                  fill="none"
                  strokeMiterlimit="10"
                  points="15,5 22,12 15,19 "
                />
              </svg>
            </div>
            <p className="text-slate-600 dark:text-slate-400">
              <FormattedMessage id="page.home.how.step3.desc" />
            </p>
          </div>
          <div>
            <div className="flex items-center justify-between mb-6">
              <p className="text-2xl font-bold text-slate-700 dark:text-slate-200">
                <FormattedMessage id="page.home.how.step4.title" />
              </p>
              <svg
                className="w-8 text-teal-600  dark:text-teal-300"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <polyline
                  fill="none"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeMiterlimit="10"
                  points="6,12 10,16 18,8"
                />
              </svg>
            </div>
            <p className="text-slate-600 dark:text-slate-400">
              <FormattedMessage id="page.home.how.step4.desc" />
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HowItWorks