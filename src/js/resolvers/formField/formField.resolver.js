import { FIELD_TYPE } from '@constants/common';

import { InputField } from "@modules/inputField";
import { SingleSelectField } from "@modules/singleSelectField";
import { CheckboxField } from "@modules/checkboxField";
import { TextAreaField } from '@modules/textAreaField';

/**
 * @type {function}
 * @desc Resolvers are pure functions used for resolving templates (React components) or to transform some data.
 * A resolver function takes an `id` and an optional `payload` and returns a `result`.
 * Based on `switch` cases inside this function, correct `result` should be returned.
 * @param {object} payload
 * @example
 * import { formFieldResolver } from 'resolvers/formField';
 */
export const formFieldResolver = ( payload = {} ) => {
    switch ( payload ) {

        // sample case
        case FIELD_TYPE.TEXT: {
            return InputField;
        }
            
        // sample case
        case FIELD_TYPE.EMAIL: {
            return InputField;
        }

        // // sample case
        // case FIELD_TYPE.PASSWORD: {
        //     return PasswordField;
        // }

        // sample case
        case FIELD_TYPE.TEXTAREA: {
            return TextAreaField;
        }

        // case FIELD_TYPE.RADIO_GROUP: {
        //     return RadioGroup;
        // }

        case FIELD_TYPE.CHECKBOX: {
            return CheckboxField;
        }

        // case FIELD_TYPE.CHECKBOX_GROUP: {
        //     return CheckboxGroup;
        // }

        // case FIELD_TYPE.DATE_FIELD: {
        //     return DateField;
        // }

        // case FIELD_TYPE.DATE_RANGE: {
        //     return DateRange;
        // }

        // case FIELD_TYPE.FILE_UPLOAD: {
        //     return FileField;
        // }

        // case FIELD_TYPE.DEEP_SELECT: {
        //     return DeepSelect;
        // }

        // case FIELD_TYPE.FORM_SECTION_TITLE: {
        //     return FormSectionTitle;
        // }

        // case FIELD_TYPE.TYPE_AHEAD: {
        //     return TypeAhead;
        // }

        case FIELD_TYPE.SINGLE_SELECT: {
            return SingleSelectField;
        }

        // case FIELD_TYPE.MULTI_SELECT: {
        //     return MultiSelect;
        // }

        // case FIELD_TYPE.TYPE_AHEAD_WITH_SEARCH: {
        //     return TypeAheadWithSearch;
        // }

        // case FIELD_TYPE.RADIO_GROUP: {
        //     return RadioGroup;
        // }

        // case FIELD_TYPE.COMPOSITE_FIELD: {
        //     return CompositeField;
        // }

        // case FIELD_TYPE.FORM_SECTION_DESCRIPTION: {
        //     return FormSectionDescription;
        // }

        // default case
        default: {
            return payload;
        }
    }
};