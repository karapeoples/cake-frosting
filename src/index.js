import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Router } from 'react-router'
import { Provider } from 'react-redux'
import store from './redux/reducers'
import 'bootstrap/dist/css/bootstrap.min.css'
import { createBrowserHistory } from 'history'
import reportWebVitals from './reportWebVitals';

export const history = createBrowserHistory()

ReactDOM.render(
	<Provider store={store}>
		<Router history={history}>
			<App />
		</Router>
	</Provider>,
	document.getElementById('root'),
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
