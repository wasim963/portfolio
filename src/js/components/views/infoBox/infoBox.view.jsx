import React from 'react'

export const infoBox = ( props ) => {
    const widgetClassName = `ui-info-box ${props?.primaryClassName}`

    return (
        <div className={widgetClassName} >infoBox.view</div>
    )
}

// set display name
infoBox.displayName = 'infoBox';

// set default props
infoBox.defaultProps = {
    primaryClassName: '',
    company: 'Avizva Solutions',
    designation: 'Development Engineer - Front End',
    startDate: '2020-00-10',
    endDate: null,
    location: 'Gurugram',
    icon: null,
    roleType: 'Full-Time'
};