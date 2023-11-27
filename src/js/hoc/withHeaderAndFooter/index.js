import React,  { Fragment } from 'react';
// import { Header } from 'components/header';
import { footer as FooterView } from 'components/footer';
import { header as HeaderView } from 'components/header'

export const withHeaderAndFooter = ( Component, config = {} ) => {

  const WithheaderAndFooter = ( props ) => {

    return (
      <Fragment>
          {/* Header View */}
          <HeaderView />
  
          <Component { ...props } { ...config }  />
  
          {/* Footer View */}
          <FooterView />
      </Fragment>
    )
  }

  return WithheaderAndFooter;
}
