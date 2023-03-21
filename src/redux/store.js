import { configureStore } from "@reduxjs/toolkit";
import newsSlice from "./slice";

export const store = configureStore({
	reducer: {
		restaurantReducer: newsSlice,
	},
});
