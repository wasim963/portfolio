import React from 'react';
import { Link } from "react-router-dom";

// local dependencies
import { Icon } from "@modules/icon-bank";

export const sidebar = (props) => {
  const { navigations, isMenuOpen, handleClick, theme, toggleTheme } = props;

  const listClassName = `ui-sidebar__list ${isMenuOpen ? 'ui-sidebar__list--open' : ''} `;
  return (
    <nav className='ui-sidebar'>
      <ul className={listClassName}>
        {
          navigations.map((navigation => {
            return (
              <li key={navigation?.name} className="ui-sidebar__list__item">
                <Link to={navigation?.path} >{navigation.title?.toUpperCase()}</Link>
              </li>
            )
          } ) )
        }
      </ul>
      <div className='ui-sidebar__menu' >
        <span onClick={ () => handleClick( 'menu' )} >
          <Icon name={ isMenuOpen ? 'close': 'hamburgerMenu'} width={24} height={24} />
        </span>
        <span onClick={ toggleTheme } >
          <Icon name={ theme === 'light' ? 'moon' : 'sun' } width={32} height={32} />
        </span>
      </div>
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
