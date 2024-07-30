import './index.css';
// import App from './App';
// router
import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"; 
import reportWebVitals from './reportWebVitals';
import Home from './home';
import About from './about/about-page';
import Sustainbility from './sustainbility/sustainbility-page';
import Kurti from './kurti/kurti';
import Mobile from './mobile/mobile';
import Grocery from './grocery/grocery';
import Electric from './electronic/electronic';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  
  {
    path: "/about/about-page",
    element: <About />,
  },
  {
    path: "/sustainbility/sustainbility-page",
    element: <Sustainbility />
  },
  {
    path: "/kurti/kurti",
    element: <Kurti />
  },
  {
    path: "/mobile/mobile",
    element: <Mobile />
  },
  {
    path: "/grocery/grocery",
    element: <Grocery />
  },
  {
    path: "/electronic/electronic",
    element: <Electric />
  }

]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
