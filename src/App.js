import React from 'react';
import PageHeader from './components/PageHeader'
import PageMain from './components/PageMain'

function App() {

  return (
    <div className="container">
      <PageHeader></PageHeader>
      {/** The error is here, the variable is called NAME, no DATA */}
      <PageMain/>
    </div>
  );
}

export default App;
