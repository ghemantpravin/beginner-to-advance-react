import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css';
import reportWebVitals from './reportWebVitals';
import Databinding from './components/data-binding/databinding';
import Primitivedatabinding from './components/data-binding/primitivedatabinding';
import Ajaxdemo from './components/ajaxdemo/ajaxdemo';
import Fetch from './components/fetchdemo/fetch';
import Amazon from './components/ajaxdemo/amazon';
import Jqueryajax from './components/ajaxdemo/jqueryajax';
import Axios from './components/axios/axios';
import Courses from './components/courses/courses';
import FetchProduct from './components/fetchProduct/fetchProduct';
import TryFilter from './components/tryFilter/tryFilter';
import ProductFilter from './components/tryFilter/tryFilter';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ProductFilter/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
