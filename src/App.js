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
        path='/search'
        component={Search}
      />
      <Route
        path='/saved'
        component={Saved}
      />
      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
        crossOrigin="anonymous"
      />
    </div>
  );
}

export default App;
