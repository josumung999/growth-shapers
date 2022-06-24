import Head from 'next/head'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Joshua Munganga - Fullstack Developer</title>
        <meta name="description" content="Joshua Munganga - Fullstack Developer frontend focused. Skilled in React.js & Next.js" />
      </Head>

      <h1 className="text-3xl font-bold underline">
        Hello World
      </h1>
    </div>
  )
}
