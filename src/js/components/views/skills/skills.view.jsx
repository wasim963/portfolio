import React, { useContext } from "react";

// local dependencies
import {
  isMobile,
  isTablet,
} from "@utils/responsiveViewportHook/responsiveViewportHook.util";
import { THEME_CONTEXT } from "@utils/themeProviderHook";

// local views to render
import { Card } from "@modules/card";
import { Icon } from "@modules/icon-bank";

export const SkillsView = (props) => {
  const { title, description, primaryClassName, skills } = props;
  const { theme } = useContext(THEME_CONTEXT);

  // main class name
  const widgetClassName = `ui-skills ${primaryClassName}`;

  // viewport width and height
  const _isMobile = isMobile();
  const _isTablet = isTablet();
  const iconWidth = _isMobile ? 64 : _isTablet ? 96 : 112;
  const iconHeight = _isMobile ? 64 : _isTablet ? 96 : 112;

  return (
    <Card
      primaryClassName={widgetClassName}
      title={title}
      description={description}
    >
      <div className="ui-skills__body">
        <div className="ui-skills__body__skills">
          {skills?.map((skill, index) => {
            return (
              <span key={index} className="ui-skills__body__skills__skill">
                <Icon
                  name={skill}
                  width={iconWidth}
                  height={iconHeight}
                  fill={theme === "dark" ? THEME.light : THEME.dark}
                />
              </span>
            );
          })}
        </div>
      </div>
    </Card>
  );
};

// set display name
SkillsView.displayName = "SkillsView";

// set default props
SkillsView.defaultProps = {
  title: "Skills",
  description: "My bucket of expertise",
  primaryClassName: "",
  skills: [
    "react",
    "next",
    "javascript",
    "html",
    "css",
    "scss",
    "webpack",
    "node",
    "typescript",
    "git",
    "npm",
    "jest",
    "graphql",
    "antd",
  ],
};
