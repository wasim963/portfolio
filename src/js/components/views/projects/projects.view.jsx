import React from "react";

// local views to render
import { ProjectView } from "@views/project";
import { Card } from "@modules/card";

export function ProjectsView( props ) {
  const { title, description, projects, primaryClassName } = props;

    React.useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("ui-projects__body__project__show");
        } else {
          entry.target.classList.remove("ui-projects__body__project__show");
        }
      });
    });

    const hiddenElements = document.querySelectorAll(".ui-projects__body__project");
    hiddenElements.forEach((el) => observer.observe(el));
    
    // Clean up the memory before the component gets destroyed:
    return () => {
      hiddenElements.forEach((el) => observer.unobserve(el));
    };
  }, []);


  const widgetClassName = `ui-projects ${primaryClassName}`;

  return (
    <Card
      primaryClassName={widgetClassName}
      title={title}
      description={description}
    >
      <div className="ui-projects__body">
        {
          projects.map( project => {
            const _primaryClassName = `ui-projects__body__project ui-projects__body__project--${project.name}`
            return(
              <ProjectView
                key={project.name}
                primaryClassName={_primaryClassName}
                title={project.title}
                description={project.description}
                config={project.config}
                stack={project.stack}
                url={project.url}
              />
            )
          } )
        }
      </div>
    </Card>
  );
}

// set display name
ProjectsView.displayName = 'ProjectsView';

// set default props
ProjectsView.defaultProps = {
  title: "Projects",
  description: "Proficiently accomplished projects",
  projects: [
    {
      name: 'blog-app',
      title: 'My Online Dairy',
      description: 'A simple, UI Friendly responsive blogging web app having CRUD operations.',
      config: {
        image: 'blog-app.png',
        icon: 'github'
      },
      stack: [
        'React', 'Node', 'Express.JS', 'Redux.JS', 'SCSS', 'MongoDB', 'JWT'
      ],
      url: 'https://github.com/wasim963/blog-app'
    },
    {
      name: 'pizza-app',
      title: 'Pizza Store',
      description: 'An online Pizza ordering platform where one can order pizzas along with an Admin Dashboard where the admin can manage orders. Online payment feature has been implemented using PayPal JS',
      config: {
        image: 'pizza-app.png',
        icon: 'github'
      },
      stack: [
        'Next.JS', 'Redux.JS', 'MongoDB', 'SCSS', '@paypal'
      ],
      url: 'https://github.com/wasim963/restaurant'
    }
  ],
  primaryClassName: ''
};