import React from "react";

// local views to render
import { AboutView } from '@views/about';
import { educationTimeline as EducationTimeline } from '@views/education-timeline';
import { SkillsView } from '@views/skills';

const VIEWS = {
  'about': AboutView,
  'educationTimeline': EducationTimeline,
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
            <View
              key={widget.name}
              primaryClassName={widgetClassName}
            />
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
      value: 'about',
      title: 'About'
    },
    {
      name: 'educationTimeline',
      value: 'education',
      title: 'Education'
    },
    {
      name: 'skills',
      value: 'skills',
      title: 'Skills'
    }
  ]
};
