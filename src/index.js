import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import Counter from './component/Counter'
//import Prop from './component/Prop';
//import Prop from './component/Prop_class';
//import stateReact from './component/stateReact';
import * as serviceWorker from './serviceWorker';
//import StateReact1 from './component/StateReact1';
import Apps from './component/Apps';
//import Apps2 from "./component/Apps2";
//import 'bootstrap';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
//ReactDOM.render(<Counter />, document.getElementById('root'));
ReactDOM.render(< Apps />, document.getElementById("root2"));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
