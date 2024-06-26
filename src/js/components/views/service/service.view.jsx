import React from "react";

// local dependencies
import useImage from '@hooks/useImage';

// local views to render
import { Card } from "@modules/card";

export function ServiceView( props ) {
  const { title, description, primaryClassName, config } = props;
  const { loading, error, image } = useImage(config?.image)

  const widgetClassName = `ui-service ${primaryClassName}`;

  return (
    <Card 
      primaryClassName={widgetClassName} 
      title={title}
      description={description}
    >
      <div className="ui-service__body">
        {
          loading ?
            <p>Loading...</p> :
            (error ? <p>config?.image</p> : <img src={image} alt={config?.image} />)
        } 
      </div>
      <div className="ui-service__gradient ui-service__gradient--top"></div>
      <div className="ui-service__gradient ui-service__gradient--right"></div>
      <div className="ui-service__gradient ui-service__gradient--bottom"></div>
      <div className="ui-service__gradient ui-service__gradient--left"></div>
    </Card>
  );
}

// set display name
ServiceView.displayName = 'ServiceView';

// set default props
ServiceView.defaultProps = {
  title: "Services",
  description: "What I bring to the table",
  primaryClassName: '',
  config: {
    image: 'webDesign'
  }
};