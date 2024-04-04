import React from "react";

// local views to render
import { AboutView } from "views/about";
import { ServicesView } from 'views/services';
import { Icon } from "modules/icon-bank/icon-bank.hoc";

const VIEWS = {
  'about': AboutView,
  'services': ServicesView
}

export const homePage = ( props ) => {
  const { widgets } = props;

  return (
    <div className="ui-home-page">
      <Icon id='javascript' width={"96"} height={"96"} />
      <Icon id='react' width={"96"} height={"96"} />
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
