import React from "react";
import { Link } from "react-router-dom";

// local dependencies
import { Icon } from '@modules/icon-bank';

export const header = ( props ) => {
  const { navigations, handleClick, theme, toggleTheme } = props;

  return (
    <header className="ui-header">
      <div className="ui-header__logo">
        <div className="ui-header__logo--icon">
            <Link to={'/'} >Wasim</Link>
          </div>
      </div>
      <nav className="ui-header__wrapper">
        <ul className="ui-header__wrapper__navs">
          {
            Array.isArray( navigations ) && navigations.map( navigation => {
              return(
                <li key={navigation?.name} className="ui-header__wrapper__navs--link">
                  <Link to={navigation?.path} >{navigation.title}</Link>
                </li>
              )
            } )
          }
        </ul>
      </nav>
      <div
        className="ui-header__theme"
        onClick={toggleTheme}
        tabIndex={0}
      >
        <Icon
          name={theme === 'light' ? 'moon' : 'sun'}
          width={32}
          height={32}
          fill={theme === 'light' ? '#fff' : '#000'}
        />
      </div>
    </header>
  );
};

// set display name
header.displayName = 'HeaderView';

// set default props
header.defaultProps = {
  navigations: [],
  theme: 'light',
  handleClick: () => {}
};