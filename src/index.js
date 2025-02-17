import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css';
import * as bootstrap from 'bootstrap';
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
import Account from './components/forms/account';
import ImageHover from './components/imageHover/imageonhover';
import FakestoreSearch from './components/fakestoreSearch/fakestoreSearch';
import React_hook_form from './components/react-hook-form/react-hook-form';
import Hook_fetch from './components/hook_Fetch/hook_fetch';
import Navbar from './custom-components-props/navbar';
import NavbarControlled from './components/controlled-demo-props/navbarControlled';
import Navbar_practice from './components/controlled-demo-props/navbar_practice';
import Cards_Main from './components/controlled-demo-props/cards_main';
import Conditional_rendering from './components/conditional_rendering/conditional_rendering';
import LayoutRouter from './components/layoutRouter';
import FakestoreList from './components/fakestore/fakestoreList';
import FakestoreIndex from './components/fakestore/fakestoreIndex';
import { CookiesProvider } from 'react-cookie';
import FakestoreLogin from './components/fakestore/fakestoreLogin';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CookiesProvider>
      <FakestoreLogin/>
    </CookiesProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
