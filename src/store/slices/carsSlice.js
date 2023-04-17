import { createSlice, nanoid } from "@reduxjs/toolkit";

const carSlice = createSlice({
	name: "cars",
	initialState: {
		searchTerm: "",
		carsList: [],
	},
	reducers: {
		changeSearchTerm(state, action) {
			state.searchTerm = action.payload;
		},
		addCar(state, action) {
			state.carsList.push({
				name: action.payload.name,
				cost: action.payload.cost,
				id: nanoid(),
			});
		},
		removeCar(state, action) {
			const updated = state.carsList.filter((car) => car.id !== action.payload);
			state.carsList = updated;
		},
	},
});

export const { changeSearchTerm, addCar, removeCar } = carSlice.actions;
export const carReducer = carSlice.reducer;
