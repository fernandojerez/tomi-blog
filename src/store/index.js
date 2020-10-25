import {
	combineReducers,
	configureStore,
	getDefaultMiddleware,
} from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import {
	FLUSH,
	PAUSE,
	PERSIST,
	persistReducer,
	PURGE,
	REGISTER,
	REHYDRATE,
} from 'redux-persist';
import ThemeModel from './theme';

const persistConfig = {
	key: 'root',
	storage,
};

const persistedReducer = persistReducer(
	persistConfig,
	combineReducers({
		theme: ThemeModel,
	})
);

export default configureStore({
	reducer: persistedReducer,
	devTools: process.env.NODE_ENV !== 'production',
	middleware: getDefaultMiddleware({
		serializableCheck: {
			ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
		},
	}),
});
