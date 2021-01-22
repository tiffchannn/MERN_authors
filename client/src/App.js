import './App.css';
import React from 'react';
import Main from './views/Main';
// import Add from './views/Add';
// import Edit from './views/Edit';
import {Router} from '@reach/router';

import Add from './views/Add_refactored';
import Edit from './views/Edit_refactored';

function App() {
  return (
    <div className="App">
      <Router>
        {/* each of these paths are GET requests */}
        <Main path="/" />
        <Add path="/new" />
        <Edit path="/edit/:id" />
      </Router>
    </div>
  );
}

export default App;
