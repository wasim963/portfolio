import React from 'react';
import { header as HeaderView } from '@views/header';
import { sidebar as SidebarView } from '@views/sidebar';

export const Header = (props) => {
  const { navigations } = props;
  return (
      <>
          <SidebarView  navigations={navigations} />
          <HeaderView navigations={navigations} />
      </>
  )
}


// set display name
Header.displayName = 'HeaderContainer';

// set default props
Header.defaultProps = {
  navigations: []
};