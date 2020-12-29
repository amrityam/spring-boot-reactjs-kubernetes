import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navigation from './components/Navigation';
import App from './App';
import Service from './components/Service'
import About from './components/About'


ReactDOM.render(
  <React.StrictMode>
    
    <Router>
      <Navigation/>
      <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/dashboard" component={App} />
        <Route path="/service" component={Service} />
        <Route path="/about" component={About} />
        
      </Switch>
    </Router>
  </React.StrictMode>, 
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
