import React from 'react';
import { useField } from 'formik';
 
export const CheckboxField = ({ children, ...props }) => {

   // React treats radios and checkbox inputs differently from other input types: select and textarea.
   // Formik does this too! When you specify `type` to useField(), it will
   // return the correct bag of props for you -- a `checked` prop will be included
  // in `field` alongside `name`, `value`, `onChange`, and `onBlur`
  
   const [field, meta] = useField({ ...props, type: 'checkbox' });
  
   return (
     <div className='ui-checkbox-field'>
       <label className="ui-checkbox-field__label">
         <input className='ui-checkbox-field__label__input' type="checkbox" {...field} {...props} />
         {children}
       </label>
       {meta.touched && meta.error ? (
         <div className="error">{meta.error}</div>
       ) : null}
     </div>
   );
};

 // set display name
CheckboxField.displayName = 'CheckboxField';

// set default props
CheckboxField.defaultProps = {
  name: 'checkbox-field',
  type: 'checkbox',
  title: '',
  placeholder: 'Enter here',
  primaryClassName: ''
};