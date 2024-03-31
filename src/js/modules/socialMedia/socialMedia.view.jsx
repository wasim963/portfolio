import React from "react";

export const socialMedia = ( props ) => {
  const {navigations, primaryClassName} = props;
  const className = `ui-social-media ${primaryClassName}`;

  return (
    <div className={className}>
      <ul className="ui-social-media__links" >
        {
          navigations.map( nav => {
            return(
              <li key={nav.name} className="ui-social-media__links--link" >{nav.title}</li>
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
        name: "twitter",
        title: "Twitter",
        type: "link",
        path: ""
    },
    {
        name: "linkedin",
        title: "Linkedin",
        type: "link",
        path: ""
    },
    {
        name: "instagram",
        title: "Instagram",
        type: "link",
        path: ""
    },
    {
        name: "github",
        title: "Github",
        type: "link",
        path: ""
    }
  ],
  primaryClassName: ''
};
