import React from 'react';
import { Formik, Form } from 'formik';

// local dependencies
import { formFieldResolver } from '@resolvers/formField';
import { validationSchemaResolver } from '@resolvers/validationSchema';

// react component views to render
import { Card } from "@modules/card";
import { button as Button } from "@modules/button";

export const ContactForm = ( props ) => {
  const { title, description, primaryClassName, formFields=[], formActions=[] } = props;

    // main class name
    const widgetClassName = `ui-contact-form ${primaryClassName}`;

    return (
      <Card
        primaryClassName={widgetClassName}
        title={title}
        description={description}
        >
            <div className="ui-contact-form__body">
                <Formik
                    initialValues={formFields.reduce((acc, field) => {
                        acc[field.name] = '';
                        return acc;
                    }, {} )}
                    validationSchema={() => validationSchemaResolver(formFields)}
                    onSubmit={(values, { setSubmitting }) => {
                        setTimeout(() => {
                        alert(JSON.stringify(values, null, 2));
                        setSubmitting(false);
                        }, 400);
                    }}
                >
                    <Form className='ui-contact-form__body__form' >
                        {/* render form fields */}
                        {
                            formFields.map(field => {
                                const FieldView = formFieldResolver(field?.type);
                                
                                return (
                                    <FieldView key={field?.name} { ...field } />
                                )
                            } )
                        }

                        {/* render form actions */}
                        {
                            formActions.map(action => {
                                return (
                                    <Button
                                        key={action?.name}
                                        { ...action }
                                    />
                                )
                            } )
                        }
                    </Form>
                </Formik>
            </div>
        </Card>
  )
}

// set display name
ContactForm.displayName = 'ContactForm';

// set default props
ContactForm.defaultProps = {
  title: "Contact",
  description: "<p>Get in touch or shoot me an email directly on <i>contact.wasim963@gmail.com</i></p>",
  primaryClassName: '',
  formFields: [
    {
        name: 'name',
        type: 'text',
        title: 'Name',
        placeholder: 'Enter name',
        validations: [
            {
                name: 'required',
                message: 'Please enter name'
            },
            {
                name: 'max',
                value: 20,
                message: 'Name must be 20 characters or less'
            }
        ]
    },
    {
        name: 'email',
        type: 'email',
        title: 'Email',
        placeholder: 'Enter email',
        validations: [
            {
                name: 'required',
                message: 'Please enter email'
            },
            {
                name: 'email',
                message: 'Please enter valid email address'
            }
        ]
    },
    {
        name: 'message',
        type: 'textarea',
        title: 'Message',
        placeholder: 'Enter your message...',
        rows: 5,
        validations: [
            {
                name: 'max',
                value: 250,
                message: 'Message must be 250 characters or less'
            }
        ]
    }
  ],
  formActions: [
      {
          name: 'submit',
          type: 'submit',
          title: 'Submit'
      }
  ]
};