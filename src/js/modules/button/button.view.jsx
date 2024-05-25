import React from 'react';

// local views to render
import { Icon } from '@modules/icon-bank';
import { ButtonPreloader } from '@modules/buttonPreloader';

export const button = ( props ) => {
    const { title, primaryClassName, preIcon, postIcon, isLoading } = props;
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
                !isLoading && preIcon &&
                <span className='ui-button__preIcon' >
                    <Icon
                        name={props.preIcon}
                        width={18}
                        height={18}
                    />
                </span>
            }
            {
                !isLoading &&
                <span className='ui-button__title' >{ title }</span>
            }
            {
                isLoading &&
                <ButtonPreloader />
            }
            {
                !isLoading && postIcon &&
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