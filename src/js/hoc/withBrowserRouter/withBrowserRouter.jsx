import React from "react";
import { BrowserRouter } from "react-router-dom";

const withBrowserRouter = (Component, props = {}) => {
  const WithRouter = () => {
    return (
      <BrowserRouter>
        <Component {...props} />
      </BrowserRouter>
    );
  };

  WithRouter.displayName = 'WithRouter';

  WithRouter.defaultProps = {};
  
  return WithRouter;
};

export { withBrowserRouter };
