import React from "react";

export const socialMedia = ( props ) => {
    const className = `ui-social-media ${props.primaryClassName}`
  return (
    <div className={className}>
      <ul className="ui-social-media__links" >
        <li className="ui-social-media__links--link" >Twitter</li>
        <li className="ui-social-media__links--link" >Linked In</li>
        <li className="ui-social-media__links--link" >Instagram</li>
        <li className="ui-social-media__links--link" >facebook</li>
      </ul>
    </div>
  );
};
