import React from "react";

// local views to render
import { ServiceView } from "@views/service";
import { Card } from "@modules/card";

export function ServicesView( props ) {
  const { title, description, services, primaryClassName } = props;

  React.useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("ui-services__body__service__show");
        } else {
          entry.target.classList.remove("ui-services__body__service__show");
        }
      });
    });

    const hiddenElements = document.querySelectorAll(".ui-services__body__service");
    hiddenElements.forEach((el) => observer.observe(el));
    
    // Clean up the memory before the component gets destroyed:
    return () => {
      hiddenElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const widgetClassName = `ui-services ${primaryClassName}`;

  return (
    <Card
      primaryClassName={widgetClassName}
      title={title}
      description={description}
    >
      <div className="ui-services__body">
        {
          services.map( service => {
            const _primaryClassName = `ui-services__body__service ui-services__body__service--${service.name}`
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
    </Card>
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
        image: 'responsive-web.webp'
      }
    },
    {
      name: 'development',
      title: 'Development',
      description: 'Building a robust digital solution from intuitive interfaces to seamless functionality, that streamlines processes, enhances productivity, and drives your business forward.',
      config: {
        image: 'development.png'
      }
    },
    {
      name: 'ui-ux',
      title: 'UI/UX',
      description: 'Crafting visually stunning interfaces and intuitive user journeys that not only captivate your audience but also drive engagement and conversions.',
      config: {
        image: 'web-design.jpg'
      }
    }
  ],
  primaryClassName: ''
};