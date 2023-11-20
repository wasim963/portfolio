import React from 'react';
import { withHeaderAndFooter } from 'hoc/withHeaderAndFooter';

const App = () => {

  const WithHeaderAndFooter = withHeaderAndFooter( () => <h2>Body Coponent</h2> )
  return (
    <div className='app'> 
      {
        WithHeaderAndFooter()
      }
    </div>
  )
}

export default App;