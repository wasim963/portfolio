import React from 'react';
import { NavLink } from "react-router-dom";

// local dependencies
import { Icon } from "@modules/icon-bank";

export const sidebar = (props) => {
  const { navigations, isMenuOpen, handleClick, theme, toggleTheme } = props;

  const listClassName = `ui-sidebar__list ${isMenuOpen ? 'ui-sidebar__list--open' : 'ui-sidebar__list--close'} `;
  return (
    <nav className='ui-sidebar'>
      <div className='ui-sidebar__menu' >
        <span
          className='ui-sidebar__menu__item'
          onClick={() => handleClick('menu')}
        >
          <Icon
            name={isMenuOpen ? 'close' : 'hamburgerMenu'}
            width={24}
            height={24}
          />
        </span>
        <span
          className='ui-sidebar__menu__item'
        >
          <NavLink
            to={'/'}
          >Wasim
          </NavLink>
        </span>
        <span
          className='ui-sidebar__menu__item'
          onClick={toggleTheme}
        >
          <Icon
            name={theme === 'light' ? 'moon' : 'sun'}
            width={32}
            height={32}
          />
        </span>
      </div>
      <ul className={listClassName}>
        {
          navigations.map((navigation => {
            return (
              <li key={navigation?.name} className="ui-sidebar__list__item">
                <NavLink
                  to={navigation?.path}
                  className={({ isActive }) => 
                    isActive ? 'ui-sidebar__list__item--active': ''
                  }
                >{navigation.title?.toUpperCase()}
                </NavLink>
              </li>
            )
          } ) )
        }
      </ul>
    </nav>
  )
}

// set display name
sidebar.displayName = 'SidebarView';

// set default props
sidebar.defaultProps = {
  navigations: [],
  direction: 'left',
  isMenuOpen: false,
  theme: 'light',
  handleClick: () => {}
};
