import React from 'react'

export const button = ( props ) => {
  return (
    <button
        className='ui-button'
        onClick={props.handleClick}
        tabIndex={0}
        disabled={props.disabled}
    >
        {
            props.preIcon && 'pre'
        }
        <span>{ props.title }</span>
        {
            props.postIcon && 'post'
        }
    </button>
  )
}

button.displayName = 'Button';

button.defaultProps = {
    title: 'Button',
    preIcon: '',
    postIcon: '',
    handleClick: () => {}
}