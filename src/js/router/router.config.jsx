import { redirect as Redirect } from 'react-router-dom';

import * as ROUTE_PATHS from 'constants/route-path';

// hoc's
import { withHeaderAndFooter } from 'hoc/withHeaderAndFooter';

// page components
import { homePage as HomePage } from "pages/home";
import { aboutPage as AboutPage } from "pages/about";
import { contactPage as ContactPage } from "pages/contact";
import { notFoundPage as NotFoundPage } from "pages/notFound";

export const routes = {
    HOME: {
        path: ROUTE_PATHS.HOME,
        exact: true,
        component: withHeaderAndFooter( HomePage )
    }, 
    ABOUT: {
        path: ROUTE_PATHS.ABOUT,
        exact: true,
        component: withHeaderAndFooter( AboutPage )
    },
    CONTACT: {
        path: ROUTE_PATHS.CONTACT,
        exact: true,
        component: withHeaderAndFooter( ContactPage )
    },
    NOT_FOUND: {
        path: ROUTE_PATHS.NOT_FOUND,
        exact: false,
        component: NotFoundPage
    },
    REDIRECT: {
        path: ROUTE_PATHS.REDIRECT,
        exact: false,
        render( props ) {
            return <Redirect to={ { pathname: ROUTE_PATHS.HOME } } />
        }
    }
}