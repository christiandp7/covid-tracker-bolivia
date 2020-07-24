import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route } from "react-router-dom";

import MainLayout from "layouts/Main.js";

import "assets/scss/black-dashboard-react.scss";
import "assets/demo/demo.css";
import "assets/css/nucleo-icons.css";

// Google Analytics
import Analytics from 'react-router-ga';

const hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Analytics id="UA-173368431-1">
      <Route path="/"  render={props => <MainLayout {...props} />} />
      {/*<Redirect from="/" to="/admin/dashboard" />*/}
    </Analytics>
  </Router>,
  document.getElementById("root")
);
