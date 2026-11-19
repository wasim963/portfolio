import React from "react";
import { useState, useEffect } from "react";

const VIEWPORT_CONTEXT = React.createContext({ width: null, height: null });

export const responsiveViewportHook = ( { children } ) => {
    const [viewport, setViewport] = useState({ width: null, height: null });

    useEffect(() => {
        const handleWindowResize = () => {
            setViewport({ width: window.innerWidth, height: window.innerHeight });
        };
        handleWindowResize();
        window.addEventListener('resize', handleWindowResize );

        return () => window.removeEventListener('resize', handleWindowResize);
    }, []);

    return(
        <VIEWPORT_CONTEXT.Provider value={viewport}>
            {children}
        </VIEWPORT_CONTEXT.Provider>
    )
};

export const isMobile = () => {
    const { width } = React.useContext( VIEWPORT_CONTEXT );
    return width !== null && width <= 768;
}

export const isTablet = () => {
    const { width } = React.useContext( VIEWPORT_CONTEXT );
    return width !== null && width >= 769 && width <= 1024;
}