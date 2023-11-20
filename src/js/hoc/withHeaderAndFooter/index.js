import React,  { Fragment } from 'react';
// import { Header } from 'components/header';
import { Footer } from 'components/footer';
import { Header } from 'components/header'

export const withHeaderAndFooter = ( Component, config = {} ) => {

  const WithheaderAndFooter = ( props ) => {

    return (
      <Fragment>
          {/* Header View */}
          <Header />
  
          <Component { ...props } { ...config }  />
  
          {/* Footer View */}
          <Footer />
      </Fragment>
    )
  }

  return WithheaderAndFooter;
}
