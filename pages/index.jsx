import Head from 'next/head'
import Navbar from '../components/Navbar'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Joshua Munganga - Fullstack Developer</title>
        <meta name="description" content="Joshua Munganga - Fullstack Developer frontend focused. Skilled in React.js & Next.js" />
      </Head>
      <Navbar />
      <h1 className="text-3xl font-bold underline">
        Hello World
      </h1>
    </div>
  )
}
