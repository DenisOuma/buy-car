import { createSlice } from "@reduxjs/toolkit";
import { addCar } from "./carsSlice";
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
	extraReducers(builder) {
		builder.addCase(addCar, (state, action) => {
			(state.name = ""), (state.cost = 0);
		});
	},
});

export const { changeName, changeCost } = formSlice.actions;
export const formReducer = formSlice.reducer;
