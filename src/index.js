import React from 'react';
import ReactDOM from 'react-dom';


import './index.css';
import App from './App';
// import './App.css';
import './assets/css/style.css';
import './assets/css/animate.min.css';
import './assets/css/responsive.css';

import Header from './component/common/Header';

ReactDOM.render(
  <React.StrictMode>
    <Header/>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


