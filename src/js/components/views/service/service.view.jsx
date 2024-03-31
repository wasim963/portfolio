import React from "react";

// local views to render
// import { socialMedia as SocialMediaView  } from "modules/socialMedia";
// import { button as Button } from "modules/button";


export function ServiceView( props ) {
  const { title, description, primaryClassName } = props;

  const widgetClassName = `ui-service ${primaryClassName}`

  return (
    <div className={widgetClassName}>
      <div className="ui-service__header">
        <h2 className="ui-service__header__title"> { title.toUpperCase() } </h2>
        <p 
          className="ui-service__header__description"
          dangerouslySetInnerHTML={{ __html: description }}
        ></p>
      </div>
      <div className="ui-service__body">
      </div>
    </div>
  );
}

// set display name
ServiceView.displayName = 'ServiceView';

// set default props
ServiceView.defaultProps = {
  title: "Services",
  description: "What I bring to the table",
  primaryClassName: ''
};