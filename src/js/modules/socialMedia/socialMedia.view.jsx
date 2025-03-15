import React from "react";

// react views to render
import { Icon } from "@modules/icon-bank";

export const socialMedia = ( props ) => {
  const {navigations, primaryClassName} = props;
  const className = `ui-social-media ${primaryClassName}`;

  return (
    <div className={className}>
      <ul className="ui-social-media__links" >
        {
          navigations.map( nav => {
            return(
              <a key={nav.name} className="ui-social-media__links--link" href={`${nav.path}`} target="_blank" >
                <Icon name={nav?.name} width={32} height={32} />
              </a>
            )
          } )
        }
      </ul>
    </div>
  );
};

// set display name
socialMedia.displayName = 'SocialMedia';

// set default props
socialMedia.defaultProps = {
  navigations: [
    {
        name: "linkedin",
        title: "Linkedin",
        type: "link",
        path: "https://www.linkedin.com/in/wasim-linked-in"
    },
    {
        name: "x",
        title: "X",
        type: "link",
        path: "https://x.com/wasim_id_"
    },
    {
        name: "instagram",
        title: "Instagram",
        type: "link",
        path: "https://www.instagram.com/_unknown_wasim_"
    },
    {
        name: "github",
        title: "Github",
        type: "link",
        path: "https://github.com/wasim963"
    }
  ],
  primaryClassName: ''
};
