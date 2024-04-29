import React from 'react';

// local views to render
import { ContactForm } from "@views/contact-form";

const VIEWS = {
  'contact-form': ContactForm
}

export const contactPage = (props) => {
  const { widgets } = props;

  return (
    <div className="ui-contact-page">
      {
        widgets.map( widget => {
          const View = VIEWS[ widget?.name ];
          const widgetClassName = `ui-contact-page__widget ui-contact-page__widget__${widget?.name}`

          return(
              <View key={widget.name}  primaryClassName={widgetClassName} />
          )
        } )
      }
    </div>
  );
}

// set display name
contactPage.displayName = 'contactPage';

// set default props
contactPage.defaultProps = {
  widgets: [
    {
      name: 'contact-form',
      title: 'Contact-Form'
    }
  ]
};