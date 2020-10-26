import React from 'react';
import { Provider } from 'react-redux';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import Layout from '../components/layout';
import Store from '../store';
import { GlobalStyles } from '../styles/global';
import { Theme } from '../styles/theme';

export const RootElement = ({ element }) => {
	const persistor = persistStore(Store);
	return (
		<>
			<GlobalStyles />
			<Provider store={Store}>
				<PersistGate loading={null} persistor={persistor}></PersistGate>
				<Theme>
					<Layout>{element}</Layout>
				</Theme>
			</Provider>
		</>
	);
};
