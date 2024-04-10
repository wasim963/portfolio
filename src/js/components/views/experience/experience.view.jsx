import React from 'react'

export const experienceView = () => {
  return (
    <div>experienceView</div>
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
    roleType: 'Full-Time'
};
