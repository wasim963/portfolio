import React from 'react';

// local dependencies
import { Icon } from '@modules/icon-bank';

export const infoBox = ( props ) => {
    const widgetClassName = `ui-info-box ${props?.primaryClassName}`

    return (
        <div className={widgetClassName} >
            <div className="ui-info-box__header">
                <div className="ui-info-box__header__period">{props.startDate} - {props.endDate ? props?.endDate : 'Present'}</div>
                <div className="ui-info-box__header__role">{ props.roleType }</div>
            </div>
            <div className="ui-info-box__body">
                <div className="ui-info-box__body__icon">
                    <Icon name={'moon'} width={72} height={72} />
                </div>
                <div className="ui-info-box__body__details">
                    <h3>{props?.designation}</h3>
                    <h4>{props.company}</h4>
                    <p>{ props?.location }</p>
                </div>
            </div>
        </div>
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