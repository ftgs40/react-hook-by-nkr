import React from 'react';
import logo from './logo.svg';
import { 
  BrowserRouter, 
  Route, 
  Link
} from "react-browser-router";
import './App.css';
import Home from '../src/page/Home';
import About from '../src/page/About';

const App = () => {
  return (
    <BrowserRouter>
      <div>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>

          <Route path="/" component={Home} />
          <Route path="/about" component={About} />
      </div>
    </BrowserRouter>
  )
}

export default App;
