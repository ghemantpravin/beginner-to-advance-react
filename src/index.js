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
import NestedDemo from './components/nestedDemo/nestedDemo';
import DateInfo from './date';
import RegExp from './regExp';
import EventDemo from './components/MouseEvents/event-demo';
import EventDemo2 from './components/MouseEvents/event-demo2';
import Twowaybinding from './components/twoWayBinding/Two-way-binding';
import Formswitch from './components/form/Formswitch';
import Emi from './components/emi/emi';
import SetTimeout from './components/timeout/setTimeout';
import FakeStoreSlider from './components/fakestoreAPISlider/fakeStore';
import { Form } from 'formik';
import Forms from './components/forms/forms';
import Forms2 from './components/forms/forms2';
import Formsyup from './components/forms/formsyup';
import Newform from './components/forms/newform';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Forms/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
