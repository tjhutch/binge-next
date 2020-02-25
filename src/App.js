import React from 'react';
import { Route } from 'react-router';
import './css/App.css';
import Header from './components/Header';
import Search from './pages/Search';
import Saved from './pages/Saved';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <Route
        exact path='/'
        component={Search}
      />
      <Route
        path='/saved'
        component={Saved}
      />
    </div>
  );
}

export default App;
