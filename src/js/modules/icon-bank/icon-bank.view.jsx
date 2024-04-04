import HTMLReactParser from 'html-react-parser';
import shortid from 'shortid';


export const iconView = ( props ) => {

    // Extract name from props and store in 'name'.
    const name = props.name || props.id;

    if( !name  || !props[ name ] ) {
        return null;
    }

    // Get the default styles object from config otherwise initialise it to an empty object {}.
    const defaultStyles = props[ name ].defaultStyles ? props[ name ].defaultStyles : {};

    // Get the markup for the icon otherwise initialise it to an empty string.
    const markup = props[ name ].markup ? props[ name ].markup : '';

    // Extract all style-related props and set some default values in case there is no prop for that property.
    // "size" overriddes "height" and "width" in props and defaultStyles.

    const width = props.size ? props.size : props.width ? props.width : defaultStyles.size ? defaultStyles.size : defaultStyles.width ? defaultStyles.width : 24;

    const height = props.size ? props.size : props.height ? props.height : defaultStyles.size ? defaultStyles.size : defaultStyles.height ? defaultStyles.height : 24;

    const rotate = props.rotate ? Number( props.rotate ) : defaultStyles.rotate? Number( defaultStyles.rotate ) : 0;

    const fill = props.fill ? props.fill : defaultStyles.fill? defaultStyles.fill : 'none';

    const stroke = props.stroke ? props.stroke : defaultStyles.stroke ? defaultStyles.stroke : '#999999';

    const opacity = props.opacity ? Number( props.opacity ) : defaultStyles.opacity? Number( defaultStyles.opacity ) : 1;

    const transform = `rotate(${rotate})`;

    // Generating unique id from name and create corresponding mask with the generated Id.
    const id = `${ name }_${ shortid.generate() }`;

    const mask = `url(#${ id })`;

    // Create the custom style object by props sent.
    const customStyles = {
        transform,
        fill,
        stroke,
        opacity,
        width,
        height,
        id,
        name,
        mask,
        ...props.customIconStyles
    };

    // Merge default styles from config with custom styles sent through props:
    const style = { ...defaultStyles, ...customStyles, focusable: false  }; // focusbale is set to false to disable on focus for svg icons in input field

    // Override the style placeholders in the markup with our merged style object:
    const replacedMarkup = replaceMarkupPlaceHolders( markup, style );

    // Parse the replacedMarkup using html-react-parser and return the markup.
    return HTMLReactParser( replacedMarkup );

};

/**
 * @desc this method is used to replace the placeholders in the markup by picking up their corresponding values from
 * the defaultStyles object in the iconConfig.
 * @param {*} markup
 * @param {*} style
 */
const replaceMarkupPlaceHolders = ( markup, style ) => {

    Object.entries(style).forEach( ([ property, value ]) => {

        const propertyToBeChanged = 'Fill' === property ? 'fill' : property;
        markup = markup.replace( new RegExp( `__${ property }__`, 'gim' ), `${ propertyToBeChanged }=${ value }` );
    } );
    
    return markup;
};