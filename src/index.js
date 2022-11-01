
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter} from 'react-router-dom';
import store from './store';
import { Provider } from 'react-redux/';
import { SprintAppProvider } from './Context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
      <BrowserRouter>
         <Provider store={store}>
          <SprintAppProvider>
            <App />
          </SprintAppProvider>
         </Provider>
      </BrowserRouter>
    </React.StrictMode>
);

