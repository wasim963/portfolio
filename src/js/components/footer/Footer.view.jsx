import React from "react";
import { socialMedia as SocialMediaView  } from "modules/socialMedia";

export function Footer() {
  return (
    <footer className="ui-footer">
      <h2 className="ui-footer__message">
        Living, learning, & leveling up one day at a time.
      </h2> 
      <SocialMediaView primaryClassName='ui-footer__links' />
      <div className="ui-footer__info" >
        <span className="ui-footer__info--logo">wasim.in</span>
        <span className="ui-footer__info--copyright">&copy; 2023</span>
      </div>
    </footer>
  );
}
