import React from 'react'

export const timelineStage = ( props ) => {
  const { primaryClassName, isFirst, isLast, side } = props;

  const widgetClassName = `ui-timeline-stage ${primaryClassName}`;
  const sideLineClass = `ui-timeline-stage__center ui-timeline-stage--${side}`

  return (
    <div className={widgetClassName} >
      {
        !isFirst && 
        <div className="ui-timeline-stage__top"></div>
      }
      <div className={sideLineClass}>
        <div className={"ui-timeline-stage__center__line"}></div>
        <div className={"ui-timeline-stage__center__circle"}></div>
      </div>
      {
        !isLast &&
        <div className="ui-timeline-stage__bottom"></div>
      }
    </div>
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


