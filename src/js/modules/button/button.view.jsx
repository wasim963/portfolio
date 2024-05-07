import React from 'react';

// local views to render
import { Icon } from '@modules/icon-bank';

export const button = ( props ) => {
    const { title, primaryClassName, preIcon, postIcon } = props;
    const widgetClassName = `ui-button ${primaryClassName}`;

    return (
        <button
            className={widgetClassName}
            type={props?.type}
            onClick={props.handleClick}
            onKeyDown={props?.handleClick}
            tabIndex={0}
            disabled={props.disabled}
            aria-label={props?.ariaLabel}
        >
            {
                preIcon &&
                <span className='ui-button__preIcon' >
                    <Icon
                        name={props.preIcon}
                        width={18}
                        height={18}
                    />
                </span>
            }
            <span className='ui-button__title' >{ title }</span>
            {
                postIcon &&
                <span className='ui-button__postIcon' >
                    <Icon
                        name={props.postIcon}
                        width={18}
                        height={18}
                    />
                </span>
            }
        </button>
    )
}

button.displayName = 'Button';

button.defaultProps = {
    title: 'Button',
    type: 'button',
    primaryClassName: '',
    preIcon: '',
    postIcon: '',
    handleClick: () => { },
    ariaLabel: 'Button'
}