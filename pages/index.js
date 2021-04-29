import Head from 'next/head'
import Header from "../components/Header"
import Hero from "../components/Hero"

export default function Home() {
  return (
    <div>
      <Head>
        <title>Contractor</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      {/* <Hero /> */}
     <h1>Hy Next</h1>
    </div>
  )
}
