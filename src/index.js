import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

/*
    Font awesome icons
 */
import "../node_modules/@fortawesome/fontawesome-free/css/all.css";

/*
    Bootstrap CSS , JS
//  */
// import "../node_modules/bootstrap/dist/css/bootstrap.css";
// import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import {BrowserRouter} from "react-router-dom";

import {Provider} from "react-redux";
import store from "./redux/store";

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<React.StrictMode>
  <BrowserRouter>
      <Provider store={store}>
          <App/>
      </Provider>
  </BrowserRouter>
</React.StrictMode>,
);

reportWebVitals();
