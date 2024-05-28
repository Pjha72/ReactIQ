import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './components/Header.js';
import Roadmap from './components/Roadmap.js';
import Signin from './components/Signin.js';
import Studyplan from './components/Studyplan';
import { createBrowserRouter, RouterProvider, Outlet} from "react-router-dom";
import Error from './components/Error.js';
import Footer from './components/Footer.js';
import Register from "./components/Register.js"
import Problems from "./components/Problem.js"
import Signout from './components/Signout.js';
import ForgetPassword from "./components/ForgetPassword.js"
import Problem from './components/Problem.js';
import Home from "./components/Home.js"


const  App = () => {
  return (
    <>
      <Header />
      <Outlet />
      {/* <Problems /> */}
      {/* <Outlet /> */}
      <Footer />
    </>
      
  );
}

const appRoute = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/login",
        element: <Signin />
      },
      {
        path: "/logout",
        element: <Signout />
      },
      {
        path: "/problems",
        element: <Problem />
      },
      {
        path: "/forget-paasword",
        element: <ForgetPassword />
      },
      {
        path: "/register",
        element: <Register />
      },
      {
        path: "/footer",
        element: <Footer />
      },
      {
        path: "/roadmap",
        element: <Roadmap />
      },
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRoute} />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
