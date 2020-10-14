import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import swDev from "./swDev"

import { StateProvider } from './Components/StateProvider';
import reducer, {initialState} from './Components/reducer';

ReactDOM.render(
  <React.StrictMode>

    <StateProvider initialState={initialState} reducer = {reducer} >
    <App />
    </StateProvider>
  </React.StrictMode>,
  document.getElementById('root')
);


swDev();
