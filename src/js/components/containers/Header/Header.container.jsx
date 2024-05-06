import React, { useState, useContext } from 'react';

// local dependencies
import { THEME_CONTEXT } from "@utils/themeProviderHook";

// react component views to render
import { header as HeaderView } from '@views/header';
import { sidebar as SidebarView } from '@views/sidebar';

export const Header = (props) => {
  const { navigations } = props;
  const { theme, toggleTheme } = useContext(THEME_CONTEXT);

  const [headerState, setheaderState] = useState({
    isMenuOpen: false,
  });

  // used handle the menu bar
  const handleClick = (name = 'menu') => {
    setheaderState(menuState => {
      return {
        ...menuState,
        isMenuOpen: !menuState.isMenuOpen
      }
    } )
  }

  return (
      <>
        <SidebarView
          {...headerState}
          theme={theme}
          toggleTheme={toggleTheme}
          navigations={navigations}
          handleClick={handleClick}
        />
        <HeaderView
          {...headerState}
          theme={theme}
          toggleTheme={toggleTheme}
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