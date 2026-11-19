'use client';

import React from 'react';
import { Header } from '@containers/Header';
import { footer as Footer } from '@views/footer';
import { responsiveViewportHook as ResponsiveViewportHook } from '@utils/responsiveViewportHook';
import { ThemeProvider } from '@utils/themeProviderHook';
import { primaryNavigations } from '@data/header';
import { footerNavigations } from '@data/footer';

export const App = ({ children }) => {
  return (
    <>
      <ResponsiveViewportHook>
        <ThemeProvider>
          <Header navigations={primaryNavigations} />
          <div className="ui-app-view">
            <div className="ui-index">{children}</div>
          </div>
          <Footer navigations={footerNavigations} />
        </ThemeProvider>
      </ResponsiveViewportHook>
    </>
  )
}

// set display name
App.displayName = 'App';

// set default props
App.defaultProps = {};