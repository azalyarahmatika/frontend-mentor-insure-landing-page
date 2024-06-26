import Head from 'next/head';
import Navigation from './components/Navigation';
import Header from './components/Header';
import Feature from './components/Feature';
import CTA from './components/CTA';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Insure</title>
        <meta name="description" content="Generated by create next app" lang='EN' />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Navigation />
        <Header />
        <Feature />
        <CTA />
        <Footer />
      </main>
    </div>
  )
}
