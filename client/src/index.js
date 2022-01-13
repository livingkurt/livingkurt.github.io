import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
// import './scss/css_reset.scss';
import './scss/style.scss';

import App from './App';
import * as serviceWorker from './serviceWorker';
import reportWebVitals from './reportWebVitals';
require('dotenv').config();

// Bugsnag.start({
// 	apiKey: process.env.REACT_APP_BUGSNAG_KEY,
// 	plugins: [ new BugsnagPluginReact() ]
// });
const path = new URL(window.location.href);
// console.log({ path });
// console.log({ href: window.location.href });

// const ErrorBoundary = Bugsnag.getPlugin('react').createErrorBoundary(React);

// ReactDOM.render(
// 	<Provider store={store}>
// 		<ErrorBoundary FallbackComponent={ErrorView}>
// 			<React.StrictMode>{path.pathname === '/links' ? <Links /> : <App />}</React.StrictMode>
// 		</ErrorBoundary>
// 	</Provider>,
// 	document.getElementById('root')
// );
ReactDOM.render(<React.StrictMode>{<App />}</React.StrictMode>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
reportWebVitals();

// import React from 'react';
// import { Provider } from 'react-redux';
// import ReactDOM from 'react-dom';
// import store from './store';
// import './scss/style.scss';
// import App from './App';
// import * as serviceWorker from './serviceWorker';
// import reportWebVitals from './reportWebVitals';

// ReactDOM.render(
// 	<Provider store={store}>
// 		<React.StrictMode><App/></React.StrictMode>
// 	</Provider>,
// 	document.getElementById('root')
// );

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
// reportWebVitals();
