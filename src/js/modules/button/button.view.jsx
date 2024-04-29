import React from 'react';

// local views to render
import { Icon } from '@modules/icon-bank';

export const button = ( props ) => {
    const { title, primaryClassName, preIcon, postIcon } = props;
    const widgetClassName = `ui-button ${primaryClassName}`;

    return (
        <button
            className={widgetClassName}
            onClick={props.handleClick}
            onKeyDown={props?.handleClick}
            tabIndex={0}
            disabled={props.disabled}
        >
            {
                    preIcon &&
                    <Icon name={props.preIcon} width = {18} height={18} />
            }
            <span>{ title }</span>
            {
                    postIcon &&
                    <Icon name={props.postIcon} width = {18} height={18} />
            }
        </button>
    )
}

button.displayName = 'Button';

button.defaultProps = {
    title: 'Button',
    primaryClassName: '',
    preIcon: '',
    postIcon: '',
    handleClick: () => {}
}