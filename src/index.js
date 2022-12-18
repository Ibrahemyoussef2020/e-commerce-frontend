import React from 'react';
import ReactDOM from 'react-dom/client';
import { disableReactDevTools } from '@fvilers/disable-react-devtools';
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom"

import './index.css';

import reportWebVitals from './reportWebVitals';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

import store from './redux/Store';
import { Provider } from 'react-redux';

import {LayOut} from './roots';
import {Home} from './roots';
import {Account} from './roots';
import {Pages} from './roots';
import {Purchases} from './roots';

if(process.env.NODE_ENV ===  'production') disableReactDevTools()

const router = createBrowserRouter([
  {
    path:'/',
    element:<LayOut />,
    errorElement:<h1>Error src</h1>,
    children:[
      {
        index:true,
        element:<Home/> 
      },
      {
        path:'account',
        element:<Account/>
      },
      {
        path:'pages',
        element:<Pages/>
      },
      {
        path:'purchases',
        element:<Purchases/>
      }
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
