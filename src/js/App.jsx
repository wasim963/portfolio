import React from 'react';
import { withHeaderAndFooter } from 'hoc/withHeaderAndFooter';
import './App.scss'

const App = () => {

  const WithHeaderAndFooter = withHeaderAndFooter( () => <h2>Body Coponent</h2> )
  return (
    <div className='ui-app'> 
      {
        WithHeaderAndFooter()
      }
    </div>
  )
}

export default App;