import React from "react";

// local views to render
import { ServiceView } from "views/service";


export function ServicesView( props ) {
  const { title, description, services, primaryClassName } = props;

  const widgetClassName = `ui-services ${primaryClassName}`

  return (
    <div className={widgetClassName}>
      <div className="ui-services__header">
        <h2 className="ui-services__header__title"> { title.toUpperCase() } </h2>
        <p 
          className="ui-services__header__description"
          dangerouslySetInnerHTML={{ __html: description }}
        ></p>
      </div>
      <div className="ui-services__body">
        {
          services.map( service => {
            const _primaryClassName = `ui-services__body__service ui-services__body__service__${service.name}`
            return(
              <ServiceView
                key={service.name}
                primaryClassName={_primaryClassName}
                title={service.title}
                description={service.description}
                config={service.config}
              />
            )
          } )
        }
      </div>
    </div>
  );
}

// set display name
ServicesView.displayName = 'ServicesView';

// set default props
ServicesView.defaultProps = {
  title: "Services",
  description: "What I bring to the table",
  services: [
    {
      name: 'webDesign',
      title: 'Responsive Web Design',
      description: 'Transform your website into a dynamic and adaptable platform that seamlessly caters to desktops, tablets, and smartphones, ensuring your business stays ahead in the digital era.',
      config: {
        icon: 'webDesign'
      }
    },
    {
      name: 'development',
      title: 'Development',
      description: 'Building a robust digital solution from intuitive interfaces to seamless functionality, that streamlines processes, enhances productivity, and drives your business forward.',
      config: {
        icon: 'development'
      }
    },
    {
      name: 'ui-ux',
      title: 'UI/UX',
      description: 'Crafting visually stunning interfaces and intuitive user journeys that not only captivate your audience but also drive engagement and conversions.',
      config: {
        icon: 'ui-ux'
      }
    }
  ],
  primaryClassName: ''
};