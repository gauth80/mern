import React from 'react';
import ReactDOM from 'react-dom';
import Firebase, {FirebaseContext} from './components/Firebase'

import App from './components/App';
import './styles/global.scss';

import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <FirebaseContext.Provider value={new Firebase()}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </FirebaseContext.Provider>,
  document.getElementById('root')
);
reportWebVitals();
