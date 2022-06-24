import React from 'react'
import { useTheme } from 'next-themes';

const Navbar = () => {

  const {theme, setTheme} = useTheme();


  return (
    <div className='container'>
      <button
        aria-label="Toggle Dark Mode"
        type="button"
        className="bg-teal-300 display-block"
        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      >Theme</button>
    </div>
  )
}

export default Navbar