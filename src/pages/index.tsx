import type { NextPage } from 'next'
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Memo</title>
        <meta name="description" content="Memo app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Memo App</h1>
      </main>
    </div>
  )
}

export default Home
