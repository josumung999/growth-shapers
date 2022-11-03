import React from 'react'
import Head from 'next/head'
import Navbar from './Navbar'
import Footer from './Footer'
import Action from './Action'
import { useRouter } from 'next/router'

const Layout = ({title, description, children}) => {
  const router = useRouter();

  console.log(router.pathname)
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
      {router.pathname !== '/contact' ? <Action /> : null }
      <Footer />
    </div>
  )
}

export default Layout