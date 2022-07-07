import React from 'react'
import { useTheme } from 'next-themes';
import { useIntl } from 'react-intl';

const Navbar = () => {

  const {theme, setTheme} = useTheme();
  const intl = useIntl();

  const menuItems = intl.messages['page.menuItems'];


  return (
      <nav className='sticky rounded top-3 z-10 mx-16 bg-gray-200 backdrop-filter backdrop-blur-lg bg-opacity-30  border-b border-gray-200'>
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <span className="text-2xl text-gray-900 font-semibold">Logo</span>
            <div className="flex space-x-4 text-gray-900">
              {menuItems.map((item) => 
                <a key={item.id} href={item.link}>
                  {item.text}
                </a>
              )}
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