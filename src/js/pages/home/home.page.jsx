import React from "react";

// local views to render
import { AboutView } from "views/about";
import { ServicesView } from 'views/services';

const VIEWS = {
  'about': AboutView,
  'services': ServicesView
}

export const homePage = ( props ) => {
  const { widgets } = props;

  return (
    <div className="ui-home-page">
      {
        widgets.map( widget => {
          const View = VIEWS[ widget?.name ];
          const widgetClassName = `ui-home-page__widget__${widget?.name}`

          return(
            <div key={widget.name} className={'ui-home-page__widget'} >
              <View primaryClassName={widgetClassName} />
            </div>
          )
        } )
      }
    </div>
  );
};

// set display name
homePage.displayName = "homePage";

// set default props
homePage.defaultProps = {
  widgets: [
    {
      name: 'about',
      title: 'About'
    },
    {
      name: 'services',
      title: 'Services'
    }
  ]
};
