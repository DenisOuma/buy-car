import React from "react";
import { useSelector } from "react-redux";

export const CarValue = () => {
	const totalCost = useSelector(({ cars: { carsList, searchTerm } }) => {
		const filteredCars = carsList
			.filter((car) =>
				car.name.toLowerCase().includes(searchTerm.toLowerCase())
			)
			.reduce((acc, car) => acc + car.cost, 0);
		return filteredCars;
	});

	return <div className="car-value">Total Cost${totalCost}</div>;
};
