import React from 'react';

// local views to render
import { Card } from "modules/card";
import { Icon } from "modules/icon-bank/icon-bank.hoc";

export const SkillsView = ( props ) => {
  const { title, description, primaryClassName, skills } = props;

  // main class name
  const widgetClassName = `ui-skills ${primaryClassName}`

  return (
    <Card 
        primaryClassName={widgetClassName} 
        title={title}
        description={description}
    >
        <div className={widgetClassName}>
            <div className="ui-skills__body">
                <div className="ui-skills__body__skills">
                    {
                        skills?.map( ( skill, index ) => {
                            return(
                                <Icon key={index} name={skill} />
                            )
                        } )
                    }
                </div>
            </div>
        </div>
    </Card>
  )
}

// set display name
SkillsView.displayName = 'SkillsView';

// set default props
SkillsView.defaultProps = {
  title: "Skills",
  description: "My bucket of expertise",
  primaryClassName: '',
  skills: [ 'react', 'javascript', 'html', 'css', 'scss', 'webpack', 'node', 'typescript', 'git', 'npm' ]
};