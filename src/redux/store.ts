// Copyright 2019-2025 @polka-labs/townhall authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { Action, ThunkAction, combineReducers, configureStore } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';
import { createTransform, persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { useDispatch } from 'react-redux';
import { authStore } from './auth';
import { RootState } from './@types';
import { getDefaultMiddlewares } from './middlewares';

export const makeStore = () => {
	const isServer = typeof window === 'undefined';
	const rootReducer = combineReducers({
		[authStore.name]: authStore.reducer
	});

	if (isServer) {
		const store = configureStore({
			devTools: true,
			middleware: getDefaultMiddlewares,
			reducer: rootReducer
		});
		return store;
	} else {
		// we need it only on client side
		const persistConfig = {
			// blacklist: [api.reducerPath],
			key: `find_a_gpu${process.env.NEXT_PUBLIC_ENVIRONMENT? `_${process.env.NEXT_PUBLIC_ENVIRONMENT}`: ''}`,
			storage,
			transforms: [],
			whitelist: [authStore.name]
		};
		const persistedReducer = persistReducer(persistConfig, rootReducer);
		const store = configureStore({
			devTools: process.env.NODE_ENV !== 'production',
			middleware: getDefaultMiddlewares,
			reducer: persistedReducer
		});
		(store as any).__persistor = persistStore(store); // Nasty hack
		return store;
	}
};

export type TAppStore = ReturnType<typeof makeStore>;
export type TAppState = RootState;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  TAppState,
  unknown,
  Action
>;

export const useAppDispatch: any = () => useDispatch<TAppStore['dispatch']>();

export const wrapper = createWrapper<TAppStore>(makeStore);