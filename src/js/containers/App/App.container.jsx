import React, { Fragment } from 'react';
import { withHeaderAndFooter } from 'hoc/withHeaderAndFooter';
import { withBrowserRouter } from 'hoc/withBrowserRouter';
import { IndexPage } from 'containers/indexPage';

export const App = () => {

  // const WithHeaderAndFooter = withHeaderAndFooter( () => <h2>Body Coponent</h2> )

  const AppView = withBrowserRouter( IndexPage )
  return (
    <div className='ui-app'> 
      <AppView />
    </div>
  )
}

// set display name
App.displayName = 'App';

// set default props
App.defaultProps = {};