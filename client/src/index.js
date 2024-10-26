import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom'; // Import BrowserRouter
import store from './redux/store'; 
import App from './App';

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter> {/* Wrap App with BrowserRouter */}
            <App />
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);
