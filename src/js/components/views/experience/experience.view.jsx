import React from 'react';

// local views to render
import { Card } from "modules/card";
import { infoBox as InfoBox } from 'views/infoBox';
import { timelineStage as TimelineStage } from 'modules/timeline-stage';

export const experienceView = ( props ) => {

  // main class name
  const widgetClassName = `ui-experience-view ${props?.primaryClassName}`;

  // body class name
  const bodyClassName = `ui-experience-view__body ui-experience-view__body--${props.side} ${props?.isLast ? 'ui-experience-view__body--last' : ''} `

  return (
    <Card 
      primaryClassName={widgetClassName}
    >
      <div className={bodyClassName}>
        <InfoBox
          company={props.company}
          designation={props.designation}
          startDate={props.startDate}
          endDate={props.endDate}
          location={props.location}
          icon={props.icon}
          roleType={props.roleType}
        />
        <TimelineStage
          isFirst={props.isFirst}
          isLast={props.isLast}
          side={props.side}
         />
      </div>
    </Card>
  )
}

// set display name
experienceView.displayName = 'experienceView';

// set default props
experienceView.defaultProps = {
    primaryClassName: '',
    company: 'Avizva Solutions',
    designation: 'Development Engineer - Front End',
    startDate: '2020-00-10',
    endDate: null,
    location: 'Gurugram',
    icon: null,
    roleType: 'Full-Time',
    isFirst: false,
    isLast: false,
    side: 'left'
};
