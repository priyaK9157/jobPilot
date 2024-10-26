import React from 'react';
import ReactDOM from 'react-dom';
import App from './src/App'; // Import your main App component
import { BrowserRouter } from 'react-router-dom'; // Import BrowserRouter
import { Provider } from 'react-redux'; // Import Provider from react-redux
import store from './src/redux/store'; // Import your Redux store


ReactDOM.render(
  <Provider store={store}>  {/* Wrap your App with Provider to connect Redux */}
    <BrowserRouter>        {/* BrowserRouter for routing */}
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
