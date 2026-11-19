import React from 'react';
import Link from "next/link";
import { usePathname } from "next/navigation";

// local dependencies
import { Icon } from "@modules/icon-bank";

export const sidebar = (props) => {
  const { navigations, isMenuOpen, handleClick, theme, toggleTheme } = props;
  const pathname = usePathname();

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
        <div className='ui-sidebar__menu__item'>
          <Link className="ui-sidebar__menu__item__icon" href={'/'} >
            <div className="ui-sidebar__menu__item__icon__left">
              <h4>Wasim</h4>
              <span>Living The Code</span>
            </div>
            <div className="ui-sidebar__menu__item__icon__right">
              <h4>
                {"<"}
                <span>{"/"}</span>
                {">"}
              </h4>
            </div>
          </Link>
        </div>
        <span
          className={`ui-sidebar__menu__item ui-sidebar__menu__item--${theme}`}
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
                <Link
                  href={navigation?.path}
                  className={pathname === navigation?.path
                    ? 'ui-sidebar__list__item--active'
                    : ''}
                >{navigation.title?.toUpperCase()}
                </Link>
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
