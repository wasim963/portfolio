import React from "react";

// local views to render
import { Card } from "@modules/card";

export function ServiceView( props ) {
  const { title, description, primaryClassName } = props;

  const widgetClassName = `ui-service ${primaryClassName}`

  return (
    <Card 
      primaryClassName={widgetClassName} 
      title={title}
      description={description}
    >
      <div className={widgetClassName}>
        <div className="ui-service__body">
        </div>
      </div>
    </Card>
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