import React from "react";
import photo from '../../../../assets/my-photo.jpeg';

// local dependencies
import useImage from "@hooks/useImage";

// local views to render
import { Card } from "@modules/card";
import { socialMedia as SocialMediaView  } from "@modules/socialMedia";
import { button as Button } from "@modules/button";

export function AboutView( props ) {
  const { title, description, primaryClassName } = props;
  const { loading, error, image } = useImage('Res_01May24.pdf');

  const widgetClassName = `ui-about ${primaryClassName}`;

  const handleDownloadResume = () => {
    // anchor link
    const element = document.createElement("a");
    element.href = image;
    element.download = "Wasim-resume-" + Date.now() + ".pdf";
    // element.target='__blank'

    // simulate link click
    document.body.appendChild(element); // Required for this to work in FireFox
    element.click();
  }
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
              preIcon={'download'}
              handleClick={handleDownloadResume}
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