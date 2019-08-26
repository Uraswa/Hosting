import React from 'react'
import Link from 'next/link'
import Head from 'next/head'
import  StockCarousel from '../components/StockCarousel/StockCarousel'
import ServicesList from "../components/ServicesList/ServicesList";


const Home = () => (
  <main>
    <Head>
      <title>Home</title>
    </Head>
      <StockCarousel/>
      <ServicesList/>
  </main>
);

export default Home
