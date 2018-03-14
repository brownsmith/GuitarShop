import React from 'react';
import { render } from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const target = document.querySelector('#root');

render(<App />, target);

registerServiceWorker();
