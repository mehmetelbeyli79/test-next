import '../styles/globals.css'
import Header from "./header";
import React from "react";

function MyApp({ Component, pageProps }) {
  return (
      <>

        <Header/>
        <Component {...pageProps} />
      </>

  )
}

export default MyApp
