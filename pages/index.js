import Head from 'next/head'
import Header from "../components/Header"
import Hero from "../components/Hero"
import Footer from "../components/Footer"
import Services from './Services'
import About from './About'
import Projects from './Projects'


export default function Home() {
  return (
    <div>
      <Head>
        <title>Contractor</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Projects />
      {/* <About />
      <Services />
      <Hero /> */}
      <Footer />
    </div>
  )
}
