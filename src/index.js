import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import {store, persistor} from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import App from './App';

ReactDOM.render(
	<Provider store={ store }>
		<React.StrictMode>
			<BrowserRouter >
				<PersistGate persistor={ persistor }>
					<App />
				</PersistGate>
			</BrowserRouter>
		</React.StrictMode>
	</Provider>,
	document.getElementById('root')
);
