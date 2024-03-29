import React from 'react'
import Head from 'next/head'
import Navbar from './Navbar'
import Footer from './Footer'
import Action from './Action'
import { useRouter } from 'next/router'
import { Header } from './Header'

const Layout = ({title, description, headerRelative, headerTitle, headerSub, children}) => {
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
      {router.pathname !== '/' && router.pathname !== '/contact' ? <Header headerRelative={headerRelative} headerTitle={headerTitle} headerSub={headerSub} /> : null }
      <main>
        {children}
      </main>
      {router.pathname !== '/contact' ? <Action /> : null }
      <Footer />
    </div>
  )
}

export default Layout