import React from 'react';
 import { Formik } from 'formik';
import * as Yup from 'yup';
import { button as Button } from "@modules/button";


// local dependencies
// import { isMobile, isTablet } from '@utils/responsiveViewportHook/responsiveViewportHook.util';

// local views to render
import { Card } from "@modules/card";
// import { Icon } from "@modules/icon-bank";

export const ContactForm = ( props ) => {
  const { title, description, primaryClassName } = props;

  // main class name
  const widgetClassName = `ui-contact-form ${primaryClassName}`;

    return (
      <Card
        primaryClassName={widgetClassName}
        title={title}
        description={description}
        >
            <div className="ui-about__body">
                <Formik
                    initialValues={{ firstName: '', lastName: '', email: '' }}
                    validationSchema={Yup.object({
                        firstName: Yup.string()
                        .max(15, 'Must be 15 characters or less')
                        .required('Please enter first  name!'),
                        lastName: Yup.string()
                        .max(20, 'Must be 20 characters or less')
                        .required('Please enter last name!'),
                        email: Yup.string().email('Invalid email address').required('Please enter email!'),
                    })}
                    onSubmit={(values, { setSubmitting }) => {
                        setTimeout(() => {
                        alert(JSON.stringify(values, null, 2));
                        setSubmitting(false);
                        }, 400);
                    }}
                >
                    {formik => (
                        <form onSubmit={formik.handleSubmit}>
                            <label htmlFor="firstName">First Name</label>
                            <input
                                id="firstName"
                                type="text"
                                {...formik.getFieldProps('firstName')}
                            />
                            {formik.touched.firstName && formik.errors.firstName ? (
                                <div>{formik.errors.firstName}</div>
                            ) : null}

                            <label htmlFor="lastName">Last Name</label>
                            <input
                                id="lastName"
                                type="text"
                                {...formik.getFieldProps('lastName')}
                            />
                            {formik.touched.lastName && formik.errors.lastName ? (
                                <div>{formik.errors.lastName}</div>
                            ) : null}

                            <label htmlFor="email">Email Address</label>
                            <input id="email" type="email" {...formik.getFieldProps('email')} />
                            {formik.touched.email && formik.errors.email ? (
                                <div>{formik.errors.email}</div>
                            ) : null}

                            <Button type={"submit"} title={'Submit'} />
                        </form>
                    )}
                </Formik>
            </div>
        </Card>
  )
}

// set display name
ContactForm.displayName = 'ContactForm';

// set default props
ContactForm.defaultProps = {
  title: "CONTACT",
  description: "Have a question or want to work together?",
  primaryClassName: ''
};