import React, { Fragment } from 'react';
import { indexPageView as IndexPageView } from 'views/indexPage';


export const IndexPage = () => {
  return (
    <Fragment>
        {/* application view */}
        <IndexPageView />
    </Fragment>
  )
}


// set display name
IndexPage.displayName = 'IndexPageContainer';

// set default props
IndexPage.defaultProps = {};
