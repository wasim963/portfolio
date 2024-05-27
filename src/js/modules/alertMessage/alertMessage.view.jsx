import React, { forwardRef } from 'react';

// local dependencies
import { Icon } from '@modules/icon-bank';

export const AlertMessage = forwardRef( ( props, ref ) => {
  const { message, icon, type, primaryClassName } = props;
  const widgetClassName = `ui-alert-message ui-alert-message--${type} ${primaryClassName}`;

  return (
    <div ref={ref} className={widgetClassName} >
      <span className='ui-alert-message__icon' >
        <Icon name={icon} width={props.width} height={props.height} />
      </span>
      <div
          className="ui-alert-message__content"
          dangerouslySetInnerHTML={{ __html: message }}
      >
      </div>
    </div>
  )
})

// set display name
AlertMessage.displayName = 'AlertMessage';

// set default props
AlertMessage.defaultProps = {
    message: '',
    icon: 'success',
    primaryClassName: '',
    type: 'success',
    width: 24,
    height: 24
}