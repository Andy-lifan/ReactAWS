import React from 'react';
//import logo from './logo.svg';
import './App.css';
//import { render } from '@testing-library/react';
import Header from './components/Header.js'
import Footer from './components/Footer.js'
import Main from './components/Main'
import GetRequestHooks from './components/GetRequestHooks'

class App extends React.Component {
  render() {
  return (
    <div className="App">
    < Header />
    < Main/>   
    < Footer />
    < GetRequestHooks />
    </div>
  );
 }
}

export default App;
