import React, { Fragment } from 'react';
import { withBrowserRouter } from '@hoc/withBrowserRouter';
import { IndexPage } from '@containers/indexPage';
import { responsiveViewportHook as ResponsiveViewportHook } from '@utils/responsiveViewportHook';

export const App = () => {
  const AppView = withBrowserRouter( IndexPage );
  
  return (
    <Fragment> 
      <ResponsiveViewportHook>
        <AppView />
      </ResponsiveViewportHook>
    </Fragment>
  )
}

// set display name
App.displayName = 'App';

// set default props
App.defaultProps = {};