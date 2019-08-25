import React from 'react'
import Link from 'next/link'
import Head from 'next/head'
import  StockCarousel from '../components/StockCarousel/StockCarousel'


const Home = () => (
  <main>
    <Head>
      <title>Home</title>
    </Head>
      <div>
        <StockCarousel/>
      </div>
      <div ></div>
  </main>
)

export default Home
