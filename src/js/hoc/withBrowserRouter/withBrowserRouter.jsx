import React from "react";
import { HashRouter } from "react-router-dom";

const withBrowserRouter = (Component, props = {}) => {
  const WithRouter = () => {
    return (
      <HashRouter>
       <React.StrictMode>
          <Component {...props} />
       </React.StrictMode>
      </HashRouter>
    );
  };

  WithRouter.displayName = 'WithRouter';

  WithRouter.defaultProps = {};
  
  return WithRouter;
};

export { withBrowserRouter };
