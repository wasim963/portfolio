import React, { Fragment } from "react";
import { Header } from "@containers/Header";
import { footer as FooterView } from "@views/footer";

// header & footer data
import { primaryNavigations } from '@data/header';
import { footerNavigations } from '@data/footer';

export const withHeaderAndFooter = (Component, config = {}) => {
  const WithHeaderAndFooter = (props) => {
    return (
      <Fragment>
        {/* Header View */}
        <Header navigations={primaryNavigations} />

        <div className="ui-app-view">
          <Component {...props} {...config} />
        </div>

        {/* Footer View */}
        <FooterView navigations={footerNavigations} />
      </Fragment>
    );
  };

  // set display name
  WithHeaderAndFooter.displayName = "WithHeaderAndFooter";

  // set default props
  WithHeaderAndFooter.defaultProps = {};

  return WithHeaderAndFooter;
};
