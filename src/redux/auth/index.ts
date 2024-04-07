// Copyright 2019-2025 @polka-labs/townhall authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.
import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';
import { IAuthStore } from './@types';

const initialState: IAuthStore = {
    loading: false
};

export const authStore = createSlice({
	extraReducers: (builder) => {
		builder
			.addCase(HYDRATE, (state, action) => {
				console.log('hydrate auth', (action as PayloadAction<any>).payload);
				return {
					...state,
					...(action as PayloadAction<any>).payload.auth
				};
			});
	},
	initialState,
	name: 'auth',
	reducers: {
		setLoading: (state, action: PayloadAction<boolean>) => {
            state.loading = action.payload;
		}
	}
}) as any;

export default authStore.reducer;
const authActions = authStore.actions;
export {
	authActions
};