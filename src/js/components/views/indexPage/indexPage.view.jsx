import React from 'react';
import { RouterOutlet } from '@router'

export const indexPageView = () => {
  return (
    <div className='ui-index'>
      <RouterOutlet />
    </div>
  )
}

// set display name
indexPageView.displayName = 'indexPageView';

// set default props
indexPageView.defaultProps = {};
