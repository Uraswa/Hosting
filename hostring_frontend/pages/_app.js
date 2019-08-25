import React,{Fragment} from 'react'
import App from 'next/app'
import Navigation from '../components/Nav/nav'
import Footer from "../components/Footer/Footer";

class MyApp extends App {

  render() {
    const { Component, pageProps } = this.props
    return (
        <Fragment>
            <header>
                <Navigation/>
            </header>
            <Component {...pageProps} />
            <footer>
                <Footer/>
            </footer>
        </Fragment>
    )
  }
}

export default MyApp