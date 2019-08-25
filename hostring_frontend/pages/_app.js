import React,{Fragment} from 'react'
import App from 'next/app'
import Navigation from '../components/Nav/nav'

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

            </footer>
        </Fragment>
    )
  }
}

export default MyApp