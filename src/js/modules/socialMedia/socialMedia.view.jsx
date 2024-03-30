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
              <li className="ui-social-media__links--link" >{nav.title}</li>
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
  navigations: [],
  primaryClassName: ''
};
