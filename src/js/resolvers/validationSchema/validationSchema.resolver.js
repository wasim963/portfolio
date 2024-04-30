import * as Yup from 'yup';

// handle field validations
const fieldValidations = (validations = []) => {

    let initialValidation = Yup.string();
    validations.forEach(({ name, message, value }) => {
        if (value) {
            if (name === 'max') {
                initialValidation = initialValidation.max( value, message  )
            } else if (name === 'min') {
                initialValidation = initialValidation.min( value, message  )
            }
        } else {
            if (name === 'required') {
                initialValidation =initialValidation.required( message )
            } else if (name === 'email') {
                initialValidation = initialValidation.email( message )
            }
        }
    })
    
    return initialValidation;
}

// this resolver creates this
`Yup.object({
           name: Yup.string()
             .max(20, 'Must be 20 characters or less')
             .required('Required'),
           email: Yup.string()
             .email('Invalid email address')
             .required('Required')
    })
`

// validation schema
export const validationSchemaResolver = (fields) => {
    const schema = fields.reduce((acc, field) => {
        acc[field?.name] = fieldValidations(field.validations)
        return acc;
    }, {})
    
    return Yup.object(schema);
};