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
		countryData: {
			articles: [],
			totalResults: 0,
		},
		article: {},
	};
}
function createReducers() {
	return {
		changeLayout: (state, { payload }) => {
			state.currentLayout = payload;
		},
		setCountryData: (state, { payload }) => {
			state.countryData = payload;
		},
		setArticle: (state, { payload }) => {
			state.article = payload;
		},
	};
}

export const { changeLayout, setCountryData, setArticle } = newsSlice.actions;

export default newsSlice.reducer;
