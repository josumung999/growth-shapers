import React from 'react'
import Head from 'next/head'
import Navbar from './Navbar'
import Footer from './Footer'

const Layout = ({title, description, children}) => {
  return (
    <div>
      <Head>
        <title>
          {title ? `${title} - Growth Shapers` : 'Growth Shapers'}
          {description && <meta name='description' content={description} />}
        </title>
      </Head>
      <Navbar />
      <main>
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default Layout