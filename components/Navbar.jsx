import React, { useState } from 'react'
import { useTheme } from 'next-themes';
import { useIntl, FormattedMessage } from 'react-intl';
import Link from 'next/link';
import { MoonIcon, SunIcon } from '@heroicons/react/outline';
import { useRouter } from 'next/router';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const {theme, setTheme} = useTheme();

  const intl = useIntl();

  const menuItems = intl.messages['page.menuItems'];

  // TODO: Implement language switcher in Navbar
  const router = useRouter()
  
  const handleLocaleChange = (event) => {
    const value = event.target.value;

    router.push(router.route, router.asPath, {
      locale: value,
    })
  }

  return (
      <nav className='sticky rounded top-0 z-50 bg-gray-200 dark:bg-gray-900 backdrop-filter backdrop-blur-lg bg-opacity-30 dark:bg-opacity-40  shadow-md'>
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Link href="/" passHref>
              <a className="text-2xl text-gray-900 dark:text-gray-200 font-semibold lg:font-bold">Growth Shapers</a>
            </Link>
            <div className="hidden lg:flex space-x-4 text-gray-900">
              {menuItems.map((item) =>
                <Link key={item.id} href={item.link}>
                  <a className="text-gray-700 text-base dark:text-gray-300">
                    {item.text}
                  </a>
                </Link>
              )}
            </div>
            <div className="hidden lg:flex items-center content-center space-x-4 text-gray-900">
              <Link href="/contact" passHref>
                  <button
                    aria-label="Call to action"
                    type="button"
                    className="
                      inline-block
                      py-3
                      px-4
                      md:px-9
                      lg:px-6
                      xl:px-9
                      rounded
                      text-base
                      font-medium
                      bg-[#13C296]
                      dark:bg-slate-900
                      transition
                      hover:bg-opacity-90
                    text-white
                      my-1
                    "
                  >
                    <FormattedMessage id="page.navbar.cta" />
                  </button>
              </Link>
              <button
                aria-label="Toggle Dark Mode"
                type="button"
                className="w-8 h-8 bg-gray-200 rounded-full dark:bg-slate-800 flex items-center justify-center hover:ring-2 ring-blue-400 transition-all duration-300 focus:outline-none"
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              >
                {theme === 'light' ? (
                  <MoonIcon className="text-gray-500 w-5 h-5" />
                ) : (
                  <SunIcon className="text-gray-400 w-5 h-5" />
                )}
              </button>
              <select id="locales" onChange={handleLocaleChange} className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 inline-block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' value={router.locale}>
                <option value="fr">
                  Français
                </option>
                <option value="en">
                  English
                </option>
              </select>
            </div>
            <div className="lg:hidden">
              <div className="flex items-center justify-center">
                <button
                  aria-label="Toggle Dark Mode"
                  type="button"
                  className="w-8 h-8 mx-2 bg-gray-200 rounded-full dark:bg-slate-800 flex items-center justify-center hover:ring-2 ring-blue-400 transition-all duration-300 focus:outline-none"
                  onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                >
                  {theme === 'light' ? (
                    <MoonIcon className="text-gray-500 w-5 h-5" />
                  ) : (
                    <SunIcon className="text-gray-400 w-5 h-5" />
                  )}
                </button>
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
              </div>
              {isMenuOpen && (
                <div className="absolute z-50 top-0 left-0 w-full">
                  <div className="p-5 bg-slate-200 dark:bg-slate-700 dark:border-none border rounded shadow-sm">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <Link href="/" passHref>
                          <a
                            aria-label="Growth Shapers"
                            title="Growth Shapers"
                            className="inline-flex items-center"
                          >
                            <span className="ml-2 text-2xl font-semibold tracking-wid text-slate-800 dark:text-slate-300">
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
                          <svg className="w-5 text-gray-800 dark:text-gray-300" viewBox="0 0 24 24">
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

                            <Link href={item.link}>
                              <a className='text-slate-800 dark:text-gray-200 text-xl mx-3'>
                                {item.text}
                              </a>
                            </Link>
                          </li>
                        ))}
                        <li className=''>
                          <Link href="/contact" passHref>
                            <button
                              aria-label="Call to action"
                              type="button"
                              className="
                                w-full
                                inline-block
                                py-3
                                px-4
                                md:px-9
                                lg:px-6
                                xl:px-9
                                rounded
                                text-base
                                font-medium
                                bg-[#13C296]
                                dark:bg-slate-900
                                transition
                                hover:bg-opacity-90
                              text-white
                                my-1
                              "
                            >
                              <FormattedMessage id="page.navbar.cta" />
                            </button>
                          </Link>
                        </li>
                        <li>
                          <select id="locales" onChange={handleLocaleChange} className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 inline-block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 w-full' value={router.locale}>
                            <option value="fr">
                              Français
                            </option>
                            <option value="en">
                              English
                            </option>
                          </select>
                        </li>
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