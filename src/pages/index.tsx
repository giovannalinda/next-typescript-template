import type { NextPage } from 'next'
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Homepage</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main>
        <h1>Hello World</h1>

        <p>
          Get started by editing <code>pages/index.tsx</code>
        </p>
      </main>
    </div>
  )
}

export default Home
