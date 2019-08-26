import React from 'react'
import Link from 'next/link'
import Head from 'next/head'
import  StockCarousel from '../components/StockCarousel/StockCarousel'
import ServicesList from "../components/ServicesList/ServicesList"
import HelpDecide from "../components/HelpDecide/HelpDecide"
import AboutCompanyShort from "../components/AboutCompanyShort/AboutCompanyShort"
import SatisfiedClients from "../components/SatisfiedClients/SatisfiedClients"


const Home = () => (
  <main>
    <Head>
      <title>Home</title>
    </Head>
      <StockCarousel/>
      <ServicesList/>
      <HelpDecide/>
      <AboutCompanyShort/>
      <SatisfiedClients/>
  </main>
);

export default Home
