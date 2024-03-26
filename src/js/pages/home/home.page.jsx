import React from "react";
import photo from "../../../assets/my-photo.jpeg";
import { button as Button } from "modules/button";

export const homePage = () => {
  return (
    <div className="ui-home-page">
      <div className="ui-home-page__left">
        <div className="ui-home-page__left__wrapper">
          <Button title={'Click To View'} />
          <img
            className="ui-home-page__left__wrapper__image"
            src={photo}
            alt="image"
            height="auto"
          />
        </div>
      </div>
      <div className="ui-home-page__right">
        <span className="ui-home-page__right__title">Who's this guy?</span>
        <div className="ui-home-page__right__desc">
          I'm a Front-End Developer for ChowNow in Los Angeles, CA. I have
          serious passion for UI effects, animations and creating intuitive,
          dynamic user experiences.
        </div>
      </div>
    </div>
  );
};

// set display name
homePage.displayName = "homePage";

// set default props
homePage.defaultProps = {};
