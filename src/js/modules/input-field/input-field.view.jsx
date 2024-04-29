import React from 'react'

export const inputField = ( props ) => {
  return (
    <div className='ui-input-field' ></div>
  )
}

// set display name
inputField.displayName = 'InputField';

// set default props
inputField.defaultProps = {
    title: '',
    placeholder: 'Enter here',
    primaryClassName: ''
};