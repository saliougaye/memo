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
          <h1 className='font-sans text-4xl font-medium'>Your memos</h1>
        </div>
        

        <div className='grid grid-cols-4 gap-x-4'>
          {
            Array.from({ length: 2}, (v, k) => 
              (
                <MemoCard
                  key={k} 
                  title='Title to looooooong'
                  notify={false}
                  date='28/09 13:30'
                  description='dsadasdaddsadssddasdsadasdaddsaddsadasdaddsadssddasssddas'
                  category={
                    k % 2 === 0 
                    ? 
                    {
                      name: 'Category ' + k,
                      color: '#f43f5e'
                    }
                    :
                    undefined
                  }
                />
              )
            )
          }
        </div>
    </div>
  )
}

export default Home
