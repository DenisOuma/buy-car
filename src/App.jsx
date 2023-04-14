import React from "react";
import { CarForm } from "./componets/CarForm";
import { CarList } from "./componets/CarList";
import { CarValue } from "./componets/CarValue";
import { CarSearch } from "./componets/CarSearch";

function App() {
	return (
		<div className="App">
			<CarForm />
			<CarList />
			<CarSearch />
			<CarValue />
		</div>
	);
}

export default App;
