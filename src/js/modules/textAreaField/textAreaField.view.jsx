import React from 'react';
import { useField } from 'formik';
 
export const TextAreaField = ({ title, primaryClassName, validations, ...props }) => {
   
   // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
   // which we can spread on <input>. We can use field meta to show an error
   // message if the field is invalid and it has been touched (i.e. visited)
  const [field, meta] = useField(props);

  const fieldClassName = `ui-text-area-field ${primaryClassName}`;
  const inputClassName = `ui-text-area-field__input ${meta.touched && meta.error ? 'ui-text-area-field__input__error' : ''} `;
  
   return (
     <div className={fieldClassName}>
       <label className={'ui-text-area-field__label'} htmlFor={props.id || props.name}>{title}</label>
       <textarea className={inputClassName} {...field} {...props} />
       {meta.touched && meta.error ? (
         <div className="ui-text-area-field__error">{meta.error}</div>
       ) : null}
     </div>
   );
 };

 // set display name
TextAreaField.displayName = 'TextAreaField';

// set default props
TextAreaField.defaultProps = {
  name: 'text-area-field',
  type: 'textarea',
  title: '',
  placeholder: 'Enter here...',
  primaryClassName: ''
};