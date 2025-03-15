import React from "react";
import { socialMedia as SocialMediaView  } from "@modules/socialMedia";

export function footer( props ) {
  const { navigations } = props;
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="ui-footer">
      <h2 className="ui-footer__message">
        Living, learning, & leveling up one day at a time.
      </h2>
      <SocialMediaView navigations={navigations} primaryClassName='ui-footer__links' />
      <div className="ui-footer__info" >
        <span className="ui-footer__info--logo">wasim.in</span>
        <span className="ui-footer__info--copyright">&copy; {currentYear}</span>
      </div>
      <div className="ui-footer__gradient"></div>
    </footer>
  );
}

// set display name
footer.displayName = 'FooterView';

// set default props
footer.defaultProps = {
  navigations: []
};