import React from 'react';

// react views to render
import { timeline as timeline } from 'views/timeline';

const underConstruction = () => {
  return(
    <h3>Under Construction</h3>
  )
}

const VIEWS = {
  'timeline': timeline,
  'educationWidget': underConstruction,
}


export const experiencePage = ( props ) => {
  const { widgets } = props;

  return (
    <div className='ui-experience-page'>
      {
        widgets.map( widget => {
          const View = VIEWS[ widget?.name ];
          const widgetClassName = `ui-experience-page__widget ui-experience-page__widget__${widget?.name}`

          return(
              <View 
                key={widget.name}  
                primaryClassName={widgetClassName} 
              />
          )
        } )
      }
    </div>
  )
}

// set display name
experiencePage.displayName = 'experiencePage';

// set default props
experiencePage.defaultProps = {
  widgets: [
    {
      name: 'timeline',
      value: 'education',
      title: 'About'
    },
    {
      name: 'educationWidget',
      value: 'education',
      title: 'Education'
    }
  ]
};
