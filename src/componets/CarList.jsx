import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeCar } from "../store";

export const CarList = () => {
	const dispatch = useDispatch();
	const cars = useSelector((state) => {
		return state.cars.carsList;
	});
	const handleRemove = (car) => {
		dispatch(removeCar(car.id));
	};
	const renderedCars = cars.map((car) => {
		return (
			<div className="panel" key={car.id}>
				<p>
					{car.name} - ${car.cost}
				</p>
				<button onClick={() => handleRemove(car)} className="button is-danger">
					Delete
				</button>
			</div>
		);
	});
	console.log(cars);
	return (
		<div className="car-list">
			{renderedCars}
			<hr />
		</div>
	);
};
