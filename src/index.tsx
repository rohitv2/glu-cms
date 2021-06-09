import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { Store, persistor } from './Redux/Store/Store';
import Loader from './components/Loader';
import App from './App';
import 'regenerator-runtime/runtime';

import './Styles/css/style.css';
import './Styles/Scss/index.scss';
import './Styles/css/icomoon.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-grid.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '!style-loader!css-loader!react-big-calendar/lib/css/react-big-calendar.css';
import './Styles/css/calendar.css';

ReactDOM.render(
    <Provider store={Store}>
        <PersistGate loading={<Loader />} persistor={persistor}>
            <App />
        </PersistGate>
    </Provider>,
    document.getElementById('root')
);
