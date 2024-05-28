import React from "react";

// local dependencies
import useImage from '@hooks/useImage';

// local views to render
import { Card } from "@modules/card";
import { Icon } from "@modules/icon-bank";

export function ProjectView( props ) {
  const { title, description, primaryClassName, config, stack=[], url } = props;
  const { loading, error, image } = useImage(config?.image)

  const widgetClassName = `ui-project ${primaryClassName}`;

  const renderCardFooter = () => {
    return (
      <ul className="ui-project__skills">
        {
          stack.map(skill => {
            return (
              <li key={skill} className="ui-project__skills__skill">
                { skill }
              </li>
            )
          } )
        }
      </ul>
    )
  }

  return (
    <Card 
      primaryClassName={widgetClassName} 
      title={title}
      description={description}
      renderCardFooter={renderCardFooter}
    >
      <div className="ui-project__body">
        {
          loading ?
            <p>Loading...</p> :
            (error ? <p>config?.image</p> : <img src={image} alt={config?.image} />)
        }
      </div>
      <a className="ui-project__repo-link" href={`${url}`} target="_blank" >
        <Icon
          name={config?.icon}
          width={36}
          height={36}
        />
      </a>
      <div className="ui-project__gradient ui-project__gradient--top"></div>
      <div className="ui-project__gradient ui-project__gradient--right"></div>
      <div className="ui-project__gradient ui-project__gradient--bottom"></div>
      <div className="ui-project__gradient ui-project__gradient--left"></div>
    </Card>
  );
}

// set display name
ProjectView.displayName = 'ProjectView';

// set default props
ProjectView.defaultProps = {
  title: "Project",
  description: "What I bring to the table",
  primaryClassName: '',
  config: {
    image: 'webDesign',
    icon: 'github'
  },
  stack: [],
  url: ''
};