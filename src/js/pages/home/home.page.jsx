import React from "react";

// local views to render
import { AboutView } from "@views/about";
import { ServicesView } from '@views/services';
import { SkillsView } from "@views/skills";

const VIEWS = {
  'about': AboutView,
  'services': ServicesView,
  'skills': SkillsView
}

export const homePage = ( props ) => {
  const { widgets } = props;

  return (
    <div className="ui-home-page">
      {
        widgets.map( widget => {
          const View = VIEWS[ widget?.name ];
          const widgetClassName = `ui-home-page__widget ui-home-page__widget__${widget?.name}`

          return(
              <View key={widget.name}  primaryClassName={widgetClassName} />
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
    },
    {
      name: 'skills',
      title: 'Skills'
    }
  ]
};
