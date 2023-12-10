import React from 'react';
import photo from '../../../assets/my-photo.jpeg'

export const homePage = () => {
  return (
    <div className="ui-home-page">
      <div className="ui-home-page__left">
        <div className="ui-home-page__left__wrapper">
          <img className='ui-home-page__left__wrapper__image' src={photo} alt="image" width={300} height="auto"  />
        </div>
      </div>
      <div className="ui-home-page__right">
        <div className="ui-home-page__right__title">
          Who's this guy?
        </div>
        <div className="ui-home-page__right__desc">
          I'm a Front-End Developer for ChowNow in Los Angeles, CA. 
          I have serious passion for UI effects, animations and creating intuitive,
          dynamic user experiences.
        </div>
      </div>
    </div>
  )
}

// set display name
homePage.displayName = 'homePage';

// set default props
homePage.defaultProps = {};
