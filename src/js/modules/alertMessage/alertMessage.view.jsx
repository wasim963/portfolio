import React from 'react';

// local dependencies
import { Icon } from '@modules/icon-bank';

export const AlertMessage = (props) => {
  const { message, icon, type, primaryClassName } = props;
  const widgetClassName = `ui-alert-message ui-alert-message--${type} ${primaryClassName}`;

  return (
    <div className={widgetClassName} >
        <Icon name={icon} />
        <div
            className="ui-alert-message__content"
            dangerouslySetInnerHTML={{ __html: message }}
        >
        </div>
    </div>
  )
}

// set display name
AlertMessage.displayName = 'AlertMessage';

// set default props
AlertMessage.defaultProps = {
    message: '',
    icon: 'success',
    primaryClassName: '',
    type: 'success'
}