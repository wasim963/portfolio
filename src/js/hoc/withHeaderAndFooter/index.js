import React,  { Fragment } from 'react';
import { Header } from 'components/header';
import { Footer } from 'components/footer';

export const withHeaderAndFooter = () => {
  return (
    <Fragment>
        {/* Header View */}
        <Header />

        {/* Footer View */}
        <Footer />
    </Fragment>
  )
}
