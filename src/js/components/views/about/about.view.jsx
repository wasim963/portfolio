import React from "react";
import photo from '../../../../assets/my-photo.jpeg';

// local views to render
import { Card } from "modules/card";
import { socialMedia as SocialMediaView  } from "modules/socialMedia";
import { button as Button } from "modules/button";

export function AboutView( props ) {
  const { title, description, primaryClassName } = props;

  const widgetClassName = `ui-about ${primaryClassName}`
  return (
    <Card
      primaryClassName={widgetClassName}
      title={title}
      // description={description}
    >
      <div className="ui-about__body">
        <div className="ui-about__body__left">
          <div className="ui-about__body__left__wrapper">
            <img
              className="ui-about__body__left__wrapper__image"
              src={photo}
              alt="image"
              height="auto"
            />
          </div>
          <div className="ui-about__body__left__social">
            <SocialMediaView primaryClassName='ui-about__body__left__social__media' />
          </div>
        </div>
        <div className="ui-about__body__right">
          <div 
            className="ui-about__body__right__desc"
            dangerouslySetInnerHTML={{ __html: description }}
          ></div>
          <div className="ui-about__body__right__actions" >
            <Button 
              primaryClassName={'ui-about__body__right__actions__action'}
              title={'Download Resume'} 
            />
          </div>
        </div>
      </div>
    </Card>
  );
}

// set display name
AboutView.displayName = 'AboutView';

// set default props
AboutView.defaultProps = {
  title: "Who's this guy?",
  description: "<p>I'm a Front-End Developer for ChowNow in Los Angeles, CA. I have serious passion for UI effects, animations and creating intuitive,dynamic user experiences.</br></br>When I am not coding or pushing pixels you will find me reading a book or binge watching</p>",
  primaryClassName:''
};