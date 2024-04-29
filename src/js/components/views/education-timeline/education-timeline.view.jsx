import React from 'react';

// react view to render
import { Card } from "@modules/card";
import { experienceView as ExperienceView } from '@views/experience';

export const educationTimeline = ( props ) => {
  const { title, description, primaryClassName, experiences } = props;

  // main class name
  const widgetClassName = `ui-education-timeline ${primaryClassName}`;
  return (
    <Card
      primaryClassName={widgetClassName}
      title={title}
      description={description}
    >
      <div className="ui-education-timeline__body">
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
educationTimeline.displayName = 'educationTimeline';

// set default props
educationTimeline.defaultProps = {
  title: "Education",
  description: "Come To Learn, Go To Serve",
  primaryClassName: '',
  experiences: [
    {
      company: 'Jamia Millia Islamia',
      designation: 'Computer Engineering',
      startDate: '2016-07-01',
      endDate: '2020-07-30',
      location: 'New Delhi',
      icon: 'jamia.png',
      roleType: 'Full-Time'
    },
    {
        company: 'Jawahar Navodaya Vidyalaya',
        designation: 'Intermediate Of Science',
        startDate: '2013-04-01',
        endDate: '2015-04-30',
        location: 'Kishanganj',
        icon: 'jnvst.png',
        roleType: 'Full-Time'
    },
    {
        company: 'Jawahar Navodaya Vidyalaya',
        designation: 'Matriculation',
        startDate: '2011-04-01',
        endDate: '2013-04-30',
        location: 'Kishanganj',
        icon: 'jnvst.png',
        roleType: 'Full-Time'
    }
  ]
};
