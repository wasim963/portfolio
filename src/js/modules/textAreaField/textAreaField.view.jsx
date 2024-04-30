import React from 'react';
import { useField } from 'formik';
 
export const TextAreaField = ({ title, validations, ...props }) => {
   
   // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
   // which we can spread on <input>. We can use field meta to show an error
   // message if the field is invalid and it has been touched (i.e. visited)
  const [field, meta] = useField(props);
  
   return (
     <div className='ui-text-area-field'>
       <label className='ui-text-area-field__label' htmlFor={props.id || props.name}>{title}</label>
       <input className="ui-text-area-field__input" {...field} {...props} />
       {meta.touched && meta.error ? (
         <div className="error">{meta.error}</div>
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