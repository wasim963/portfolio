import React from 'react';

// react view to render
import { Card } from "modules/card";

export const experienceWidget = ( props ) => {
    const { title, description, primaryClassName, experienceData } = props;

  // main class name
  const widgetClassName = `ui-experience-widget ${primaryClassName}`;
  return (
    <Card
        primaryClassName={widgetClassName}
        title={title}
        description={description}
    >
        <div className="ui-experience-widget__body">
            {
                Array.isArray( experienceData ) &&
                experienceData.map( ( exp, index ) => {
                    return(
                        <h3>Experience</h3>
                    )
                } )
            }
        </div>
    </Card>
   
  )
}

// set display name
experienceWidget.displayName = 'experienceWidget';

// set default props
experienceWidget.defaultProps = {
  title: "Experience",
  description: "A timeline of dedication, learning, and contributions",
  primaryClassName: '',
  experienceData: [
    {
        company: 'Avizva Solutions',
        designation: 'Development Engineer - Front End',
        startDate: '2020-00-10',
        endDate: null,
        location: 'Gurugram',
        icon: null,
        roleType: 'Full-Time'
    },
    {
        company: 'Stellar India',
        designation: 'Software Engineer',
        startDate: '2019-02-01',
        endDate: '2019-03-30',
        location: 'New Delhi',
        icon: null,
        roleType: 'Freelance'
    }
  ]
};
