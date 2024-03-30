import React, { Fragment } from "react";
import { footer as FooterView } from "views/footer";
import { header as HeaderView } from "views/header";

// header & footer data
import { primaryNavigations } from 'data/header';
import { footerNavigations } from 'data/footer';

export const withHeaderAndFooter = (Component, config = {}) => {
  const WithHeaderAndFooter = (props) => {
    return (
      <Fragment>
        {/* Header View */}
        <HeaderView navigations={primaryNavigations} />

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
