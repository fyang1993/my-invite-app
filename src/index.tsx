import React from 'react';
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import Router from "./router";
window.React = React
ReactDOM.render(
  <BrowserRouter>
      <Router />
  </BrowserRouter>,
  document.querySelector('#root'),
   );
