import { createSlice } from "@reduxjs/toolkit";

const name = "news";
const initialState = createInitialState();
const reducers = createReducers();

export const newsSlice = createSlice({
	name,
	initialState,
	reducers,
});

function createInitialState() {
	return {
		currentLayout: "default",
	};
}
function createReducers() {
	return {
		changeLayout: (state, { payload }) => {
			state.currentLayout = payload;
		},
	};
}

export const { changeLayout } = newsSlice.actions;

export default newsSlice.reducer;
