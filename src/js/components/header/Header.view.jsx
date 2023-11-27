import React from "react";

export const header = () => {
  return (
    <header className="ui-header">
      <div className="ui-header__logo">
        <a href="#" className="ui-header__logo--icon">
          Wasim
        </a>
      </div>
      <nav className="ui-header__wrapper">
        <ul className="ui-header__wrapper__navs">
          <li className="ui-header__wrapper__navs--link">
            <span>About</span>
          </li>
          <li className="ui-header__wrapper__navs--link">
            <span>Portfolio</span>
          </li>
          <li className="ui-header__wrapper__navs--link">
            <span>Projects</span>
          </li>
          <li className="ui-header__wrapper__navs--link">
            <span>Contact</span>
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