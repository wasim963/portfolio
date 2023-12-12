import React from "react";
import { useState, useEffect } from "react";

const VIEWPORT_CONTEXT = React.createContext({});

export const responsiveViewportHook = ( { children } ) => {
    const [width, setWidth] = useState( window.innerWidth );
    const [height, setHeight] = useState( window.innerHeight );

    const handleWindowResize = () => {
        setWidth( window.innerWidth );
        setHeight( window.innerHeight );
    }

    useEffect( () => {
        window.addEventListener('resize', handleWindowResize );

        return () => window.removeEventListener( 'resize', handleWindowResize )
    } )

    return(
        <VIEWPORT_CONTEXT.Provider value={ { width, height } } >
            {children}
        </VIEWPORT_CONTEXT.Provider>
    )
};

export const isMobile = () => {
    const { width } = React.useContext( VIEWPORT_CONTEXT );
    return width <= 768;
}

export const isTablet = () => {
    const { width } = React.useContext( VIEWPORT_CONTEXT );
    return width >= 769 && width <= 1024;
}