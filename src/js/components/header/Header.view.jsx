import React from "react";
import { Link } from "react-router-dom";

export const header = () => {
  return (
    <header className="ui-header">
      <div className="ui-header__logo">
        <div className="ui-header__logo--icon">
            <Link to={'/'} >Wasim</Link>
          </div>
      </div>
      <nav className="ui-header__wrapper">
        <ul className="ui-header__wrapper__navs">
          <li className="ui-header__wrapper__navs--link">
            <Link to={'/about'} >About</Link>
          </li>
          <li className="ui-header__wrapper__navs--link">
            <Link to={'/portfolio'} >Portfolio</Link>
          </li>
          <li className="ui-header__wrapper__navs--link">
            <Link to={'/contact'} >Contact</Link>
          </li>
        </ul>
      </nav>
      <div className="ui-header__theme">
        <a>Theme</a>
      </div>
    </header>
  );
};

// set display name
header.displayName = 'headerView';

// set default props
header.defaultProps = {};