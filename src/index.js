import React from 'react';
import { render } from 'react-dom';

import './index.css';
import App from './components/App';
import register from './registerServiceWorker';

render(<App message="Bamblehorse" />, document.getElementById('root'));

register();
