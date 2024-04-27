import React from 'react';

const renderSidebar = ( { navigations, direction, isOpen } ) => {

}

export const sidebar = () => {
  return (
    <div className='ui-sidebar'>sidebar.view</div>
  )
}

// set display name
sidebar.displayName = 'SidebarView';

// set default props
sidebar.defaultProps = {
  navigations: [],
  direction: 'left',
  isOpen: false
};
