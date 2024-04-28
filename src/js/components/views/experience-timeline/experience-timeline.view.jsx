import React from 'react';

// react view to render
import { Card } from "@modules/card";
import { experienceView as ExperienceView } from '@views/experience';

export const experienceTimeline = ( props ) => {
  const { title, description, primaryClassName, experiences } = props;

  // main class name
  const widgetClassName = `ui-experience-timeline ${primaryClassName}`;
  return (
    <Card
      primaryClassName={widgetClassName}
      title={title}
      description={description}
    >
      <div className="ui-experience-timeline__body">
        {
          Array.isArray( experiences ) &&
          experiences.map( ( exp, index ) => {
            return(
                <ExperienceView
                  key={index} 
                  {...exp} 
                  isFirst={index === 0}
                  isLast={ index === experiences.length - 1 }
                  side={ index % 2 === 0 ? 'left' : 'right' }
                />
            )
          } )
        }
      </div>
    </Card>
   
  )
}

// set display name
experienceTimeline.displayName = 'experienceTimeline';

// set default props
experienceTimeline.defaultProps = {
  title: "Experience",
  description: "A timeline of dedication, learning, and contributions",
  primaryClassName: '',
  experiences: [
    {
      company: 'HashedIn',
      designation: 'SDE-2',
      startDate: '2024-07-01',
      endDate: null,
      location: 'Bangluru',
      icon: null,
      roleType: 'Full-Time'
    },
    {
        company: 'Avizva Solutions',
        designation: 'Development Engineer - Front End',
        startDate: '2020-08-10',
        endDate: '2024-06-30',
        location: 'Gurugram',
        icon: null,
        roleType: 'Full-Time'
    },
    {
        company: 'Stellar India',
        designation: 'Web Developer Intern',
        startDate: '2019-02-01',
        endDate: '2019-03-30',
        location: 'New Delhi',
        icon: null,
        roleType: 'Freelance'
    }
  ]
};
