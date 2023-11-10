import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Is beef ill?</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Is beef currently ill?" />
        <p className="description">
           <span className="code">Yes</span> beefy baeith is currently lay up in bed, ill as a bofa can be
        </p>
      </main>

      <Footer />
    </div>
  )
}
