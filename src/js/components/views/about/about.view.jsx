import React from "react";
import photo from '../../../../assets/passportpic.jpg';

// local views to render
import { Card } from "@modules/card";
import { socialMedia as SocialMediaView  } from "@modules/socialMedia";
import { button as Button } from "@modules/button";

// local dependencies
import useImage from "@hooks/useImage";

export function AboutView( props ) {
  const { title, description, primaryClassName } = props;
  const widgetClassName = `ui-about ${primaryClassName}`;

  const { loading, error, image } = useImage('resume_wasim.pdf');

  const handleDownloadResume = () => {
    // anchor link
    const element = document.createElement("a");
    element.href = image;

    // download directly instead of opening in a new tab
    // element.download = "Wasim-resume-" + Date.now() + ".pdf";

    // open downloaded file in a new tab
    element.target = "__blank";

    // simulate link click
    document.body.appendChild(element); // Required for this to work in FireFox
    element.click();
  }

  return (
    <Card
      primaryClassName={widgetClassName}
    >
      <div className="ui-about__body">
        <div className="ui-about__body__left">
          <div className="ui-about__body__left__wrapper">
            <img
              className="ui-about__body__left__wrapper__image"
              src={photo}
              alt="image"
            />
          </div>
          <div className="ui-about__body__left__social">
            <SocialMediaView primaryClassName='ui-about__body__left__social__media' />
          </div>
        </div>
        <div className="ui-about__body__right">
          <div className="ui-about__body__right__title">{ title }</div>
          <div 
            className="ui-about__body__right__desc"
            dangerouslySetInnerHTML={{ __html: description }}
          ></div>
          <Button 
            primaryClassName={'ui-about__body__right__action'}
            title={'Download Resume'} 
            preIcon={'download'}
            handleClick={handleDownloadResume}
          />
        </div>
      </div>
    </Card>
  );
}

// set display name
AboutView.displayName = 'AboutView';

// set default props
AboutView.defaultProps = {
  title: "I AM WASIM AKRAM",
  description: "<p>I'm a Results-driven Frontend Engineer with 5+ years of experience specializing in React.js, TypeScript, and modern scalable frontend architecture. Proven track record of architecting enterprise applications serving 100K+ users, improving rendering performance by up to 40%, establishing automated testing standards, and mentoring cross-functional engineering teams to deliver measurable business impact.</p>",
  primaryClassName:''
};