import type { NextPage } from 'next'
import Head from 'next/head'
import { MemoCard } from '../components'

const Home: NextPage = () => {
  return (
    <div className='md:container md:mx-auto my-4'>
      <Head>
        <title>Memo</title>
        <meta name="description" content="Memo app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

        <div className='my-6'>
          <h1 className='font-sans text-2xl font-medium'>Your memos</h1>
        </div>
        

        <div className='grid grid-cols-4 gap-4'>
          <MemoCard 
            title='Title to looooooong'
            notify={true}
            date='28/09 13:30'
          />
        </div>
    </div>
  )
}

export default Home
