import { createSlice } from '@reduxjs/toolkit';

const Model = createSlice({
	name: 'theme',
	initialState: 'none',
	reducers: {
		toggle: state => (state === 'light' ? 'dark' : 'light'),
		init: (state, { payload }) => (state === 'none' ? payload : state),
	},
});

export const currentTheme = state => state.theme;
export const { toggle, init } = Model.actions;
export default Model.reducer;
