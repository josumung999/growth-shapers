import React from 'react'
import { useTheme } from 'next-themes';
import { FormattedMessage, useIntl } from 'react-intl';

const Navbar = () => {

  const {theme, setTheme} = useTheme();

  // Setting up navbar content from locales
  const intl = useIntl();

  const links = intl.formatMessage({ id: "site.menu" })


  return (
      <nav className='sticky rounded top-3 z-10 mx-16 bg-gray-200 backdrop-filter backdrop-blur-lg bg-opacity-30  border-b border-gray-200 shadow-xl'>
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <span className="text-2xl text-gray-700 dark:text-gray-400 font-semibold">Logo</span>
            <div className="flex space-x-4 text-gray-900 dark:text-gray-100">
              <a href="#">Dashboard</a>
              <a href="#">About</a>
              <a href="#">Projects</a>
              <a href="#">Contact</a>
              {/* {links.map((link) => {
                <a href="#" key={link.id}>
                  {link.content}
                </a>
              })} */}
            </div>
            <div className="flex space-x-4 text-gray-900">
              <button
                aria-label="Toggle Dark Mode"
                type="button"
                className="bg-teal-300 py-4 px-4"
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              >Theme</button>
            </div>
          </div>
        </div>
      </nav>
  )
}

export default Navbar