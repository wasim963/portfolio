import React from 'react'

export const timelineStage = () => {
  return (
    <div className='ui-timeline-stage' >timeline-stage.view</div>
  )
}

// set display name
timelineStage.displayName = 'timelineStage';

// set default props
timelineStage.defaultProps = {
    primaryClassName: '',
    isFirst: false,
    isLast: false,
    side: 'left'
};


