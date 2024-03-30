import React from "react";
import { Link } from "react-router-dom";

export const header = ( props ) => {
  const { navigations } = props;

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
                <li className="ui-header__wrapper__navs--link">
                  <Link to={navigation?.path} >{navigation.title}</Link>
                </li>
              )
            } )
          }
        </ul>
      </nav>
      <div className="ui-header__theme">
        <a>Theme</a>
      </div>
    </header>
  );
};

// set display name
header.displayName = 'HeaderView';

// set default props
header.defaultProps = {
  navigations: []
};