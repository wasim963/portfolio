import React from "react";

// local views to render
import { AboutView } from "views/about";

export const homePage = () => {
  return (
    <div className="ui-home-page">
      <AboutView />
    </div>
  );
};

// set display name
homePage.displayName = "homePage";

// set default props
homePage.defaultProps = {};
