import React, { useState } from 'react'
import { useTheme } from 'next-themes';
import { useIntl } from 'react-intl';
import Link from 'next/link';
import { MoonIcon, SunIcon } from '@heroicons/react/outline';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const {theme, setTheme} = useTheme();

  const intl = useIntl();

  const menuItems = intl.messages['page.menuItems'];
  return (
      <nav className='sticky rounded top-1 lg:top-3 z-10 mx-4 lg:mx-16 bg-gray-200 backdrop-filter backdrop-blur-lg bg-opacity-30  border-b border-gray-200'>
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <span className="text-2xl text-gray-900 font-semibold">Logo</span>
            <div className="hidden lg:flex space-x-4 text-gray-900">
              {menuItems.map((item) => 
                <a key={item.id} className="text-gray-700 dark:text-gray-300" href={item.link}>
                  {item.text}
                </a>
              )}
            </div>
            <div className="flex space-x-4 text-gray-900">
              <button
                aria-label="Toggle Dark Mode"
                type="button"
                className="w-8 h-8 bg-teal-400 rounded-lg dark:bg-slate-800 flex items-center justify-center hover:ring-2 ring-blue-400 transition-all duration-300 focus:outline-none"
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              >
                {theme === 'light' ? (
                  <MoonIcon className="text-blue-500 w-5 h-5" />
                ) : (
                  <SunIcon className="text-blue-400 w-5 h-5" />
                )}
              </button>
            </div>
            <div className="lg:hidden">
              <button
                aria-label="Open Menu"
                title="Open Menu"
                className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline"
                onClick={() => setIsMenuOpen(true)}
              >
                <svg className="w-5 text-gray-600 dark:text-gray-300" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                  />
                  <path
                    fill="currentColor"
                    d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                  />
                  <path
                    fill="currentColor"
                    d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                  />
                </svg>
              </button>
              {isMenuOpen && (
                <div className="absolute z-50 top-0 left-0 w-full">
                  <div className="p-5 bg-white dark:bg-slate-600 dark:border-none border rounded shadow-sm">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <Link href="/">
                          <a
                            aria-label="Growth Shapers"
                            title="Growth Shapers"
                            className="inline-flex items-center"
                          >
                            <span className="ml-2 text-lg font-bold tracking-wid text-white">
                              Growth Shapers
                            </span>
                          </a>
                        </Link>
                      </div>
                      <div>
                        <button
                          aria-label="Close Menu"
                          title="Close Menu"
                          className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          <svg className="w-5 text-gray-600 dark:text-gray-300" viewBox="0 0 24 24">
                            <path
                              fill="currentColor"
                              d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                    <nav>
                      <ul className="space-y-4">
                        {menuItems.map((item) =>( 
                          <li key={item.id} >
                            <a className='text-gray-300 text-xl' href={item.link}>
                              {item.text}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </nav>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>
  )
}

export default Navbar