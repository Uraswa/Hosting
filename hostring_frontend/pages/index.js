import React from 'react'
import Link from 'next/link'
import Head from 'next/head'
import  StockCarousel from '../components/StockCarousel/StockCarousel'
import ServicesList from "../components/ServicesList/ServicesList"
import HelpDecide from "../components/HelpDecide/HelpDecide";


const Home = () => (
  <main>
    <Head>
      <title>Home</title>
    </Head>
      <StockCarousel/>
      <ServicesList/>
      <HelpDecide/>
  </main>
);

export default Home
