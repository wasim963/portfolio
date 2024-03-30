import React from 'react'

export const button = ( props ) => {
    const { title, primaryClassName, preIcon, postIcon } = props;

    const className = `ui-button ${primaryClassName}`
  return (
    <button
        className={className}
        onClick={props.handleClick}
        tabIndex={0}
        disabled={props.disabled}
    >
        {
            preIcon && 'pre'
        }
        <span>{ title }</span>
        {
            postIcon && 'post'
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