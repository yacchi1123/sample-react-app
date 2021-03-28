import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './index.css';
import Top from './views/pages/Top';
import Sample from './views/pages/Sample';
import Header from './views/components/Header';
import store from './store'

ReactDOM.render(
  <Provider store={store}>
    <Router>
    <div className='wrap'>
      <Header />
      <Route exact path='/' component={Top}/>
      <Route exact path='/menu2' render={ () => <Sample name={'Menu2'}/> }/>
      <Route exact path='/menu3' render={ () => <Sample name={'Menu3'}/> }/>
      <Route exact path='/menu4' render={ () => <Sample name={'Menu4'}/> }/>
    </div>
    </Router>
  </Provider>,
  document.getElementById('root')
);
