import React from 'react';
import ReactDOM from 'react-dom';
import { OpenShsApp } from './OpenShsApp';
import './firebase/config';
import './styles/styles.scss';

ReactDOM.render(
  <React.StrictMode>
    <OpenShsApp />
  </React.StrictMode>,
  document.getElementById('root')
);
