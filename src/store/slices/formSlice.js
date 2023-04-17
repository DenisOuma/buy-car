import { createSlice } from "@reduxjs/toolkit";

const formSlice = createSlice({
	name: "slice",
	initialState: {
		name: "",
		cost: 0,
	},
	reducers: {
		// change Name
		changeName(state, action) {
			state.name = action.payload;
		},
		// change Cost
		changeCost(state, action) {
			state.cost = action.payload;
		},
	},
});

export const { changeName, changeCost } = formSlice.actions;
export const formReducer = formSlice.reducer;
