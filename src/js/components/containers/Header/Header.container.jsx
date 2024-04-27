import React, { useState } from 'react';
import { header as HeaderView } from '@views/header';
import { sidebar as SidebarView } from '@views/sidebar';

export const Header = (props) => {
  const { navigations } = props;

  const [headerState, setheaderState] = useState({
    isMenuOpen: false,
    theme: 'light'
  });

  // used handle the menu bar
  const handleClick = (name = 'menu') => {
    setheaderState(menuState => {
      if (name === 'menu') {
        return {
          ...menuState,
          isMenuOpen: !menuState.isMenuOpen
        }
      } else {
        return {
          ...menuState,
          theme: menuState?.theme === 'light' ? 'dark': 'light'
        }
      }
    } )
  }

  return (
      <>
        <SidebarView
          {...headerState}
          navigations={navigations}
          handleClick={handleClick}
        />
        <HeaderView
          {...headerState}
          navigations={navigations}
          handleClick={handleClick}
        />
      </>
  )
}


// set display name
Header.displayName = 'HeaderContainer';

// set default props
Header.defaultProps = {
  navigations: []
};