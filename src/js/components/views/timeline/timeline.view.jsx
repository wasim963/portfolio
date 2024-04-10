import React from 'react';

// react view to render
import { Card } from "modules/card";

export const timeline = ( props ) => {
  const { title, description, primaryClassName, experiences } = props;

  // main class name
  const widgetClassName = `ui-timeline ${primaryClassName}`;
  return (
    <Card
        primaryClassName={widgetClassName}
        title={title}
        description={description}
    >
        <div className="ui-timeline__body">
            {
                Array.isArray( experiences ) &&
                experiences.map( ( exp, index ) => {
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
timeline.displayName = 'timeline';

// set default props
timeline.defaultProps = {
  title: "Experience",
  description: "A timeline of dedication, learning, and contributions",
  primaryClassName: '',
  experiences: [
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