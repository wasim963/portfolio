import React from 'react';

// local views to render
import { Icon } from '@modules/icon-bank';

export const ButtonPreloader = ( props ) => {
    const { primaryClassName } = props;
    const widgetClassName = `ui-button-preloader ${primaryClassName}`;

    return (
        <div className={widgetClassName} ></div>
    )
}

ButtonPreloader.displayName = 'ButtonPreloader';

ButtonPreloader.defaultProps = {
    title: 'ButtonPreloader',
    type: 'button',
    primaryClassName: '',
    ariaLabel: 'Button Preloader'
}