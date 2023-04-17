import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeCost, changeName } from "../store";
export const CarForm = () => {
	const dispatch = useDispatch();
	const { name, cost } = useSelector((state) => {
		return {
			name: state.form.name,
			cost: state.form.cost,
		};
	});

	const handleNameChange = (e) => {
		dispatch(changeName(e.target.value));
	};
	const handleCostChange = (e) => {
		dispatch(changeCost(Number(e.target.value))) || 0;
	};
	console.log(name, cost);
	return (
		<div className="car-form panel">
			<h4 className="subtitle is-3">Add Car</h4>
			<form>
				<div className="field-group">
					<div className="field">
						<label htmlFor="name" className="label">
							Name
						</label>
						<input
							type="text"
							value={name}
							className="input is-expanded"
							onChange={handleNameChange}
						/>
					</div>
				</div>
				<div className="field-group">
					<div className="field">
						<label htmlFor="name" className="label">
							Cost
						</label>
						<input
							type="number"
							value={cost}
							className="input is-expanded"
							onChange={handleCostChange}
						/>
					</div>
				</div>
			</form>
		</div>
	);
};
