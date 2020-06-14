import React from 'react';
import TablesComponent from '../tables/TablesComponent'
import QrComponent from '../Qr/QrComponent';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'


function App() {
  return (
    <Router>
      <div className="container">
        <h1>Easy Order!</h1>
        <Link to='/tables' className='btn btn-default'>Tables</Link>
        <Link to='/qr' className='btn btn-default'>QR</Link>
        
        <Route path='/tables' component={TablesComponent} />
        <Route path='/qr' component={QrComponent} />
      </div>
    </Router>
  );
}

export default App;
