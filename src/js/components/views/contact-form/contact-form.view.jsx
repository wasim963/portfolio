import React, { useState, useRef } from 'react';
import { Formik, Form } from 'formik';

// local dependencies
import { formFieldResolver } from '@resolvers/formField';
import { validationSchemaResolver } from '@resolvers/validationSchema';

// react component views to render
import { Card } from "@modules/card";
import { button as Button } from "@modules/button";
import { AlertMessage } from "@modules/alertMessage";

export const ContactForm = ( props ) => {
    const { title, description, primaryClassName, formFields = [], formActions = [] } = props;

    const [isSending, setIsSending] = useState(false);
    const [emailResponse, setEmailResponse] = useState(undefined);

    const myRef = useRef();

    const handleFormSubmit = async (values, { setSubmitting }) => {

        setIsSending(true);

        const jsonPayload = JSON.stringify({
            ...values,
            access_key: 'edf0d9e9-620f-4df8-9d01-0c059f9e30f1'
        })

        setEmailResponse(undefined);
        
        try {
            const res = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json"
                },
                body: jsonPayload
            })
            const response = await res.json();
            if (response.success) {
                setEmailResponse({...response, type: 'success', icon: 'success'});
            } else {
                setEmailResponse({...response, type: 'error', icon: 'error'});
            }
            setIsSending(false);
            // myRef.current.scrollIntoView();
        } catch (error) {
            setEmailResponse({...error, message: 'Something went wrong, Please try again!', type: 'error', icon: 'error'});
            setIsSending(false);
            // myRef.current.scrollIntoView();
        }
    }

    // main class name
    const widgetClassName = `ui-contact-form ${primaryClassName}`;

    return (
      <Card
        primaryClassName={widgetClassName}
        title={title}
        description={description}
        >
            <div className="ui-contact-form__body">
                {
                    emailResponse && 
                    <AlertMessage
                        ref={myRef}
                        message={emailResponse.message}
                        icon={emailResponse.icon}
                        type={emailResponse.type}
                    />
                }
                <Formik
                    initialValues={formFields.reduce((acc, field) => {
                        acc[field.name] = '';
                        return acc;
                    }, {})}
                    validationSchema={() => validationSchemaResolver(formFields)}
                    onSubmit={ handleFormSubmit }
                >
                    <Form className='ui-contact-form__body__form' >
                        {/* render form fields
                        <input type="hidden" name="access_key" value="edf0d9e9-620f-4df8-9d01-0c059f9e30f1"/> */}
                        {
                            formFields.map(field => {
                                const FieldView = formFieldResolver(field?.type);
                                
                                return (
                                    <FieldView key={field?.name} { ...field } />
                                )
                            } )
                        }

                        {/* hCaptcha Spam Protection
                        <div class="h-captcha" data-captcha="true"></div> */}

                        {/* render form actions */}
                        {
                            formActions.map(action => {
                                return (
                                    <Button
                                        key={action?.name}
                                        {...action}
                                        isLoading={isSending}
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
                value: 30,
                message: 'Name must be 20 characters or less'
            },
            {
                name: 'min',
                value: 3,
                message: 'Name must be 3 characters or more'
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
            },
            {
                name: 'required',
                message: 'Please write something...'
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