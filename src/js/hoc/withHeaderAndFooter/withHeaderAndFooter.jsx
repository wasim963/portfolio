import React,  { Fragment } from 'react';
import { footer as FooterView } from 'components/footer';
import { header as HeaderView } from 'components/header'

export const withHeaderAndFooter = ( Component, config = {} ) => {

  const WithHeaderAndFooter = ( props ) => {

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

  return WithHeaderAndFooter;
}
