import React from "react";
import Header from "../header/Header";
import ContributeForm from "../ContibuteForm/ContributeForm";
import { Switch } from "react-router-dom";

const AppRouter = () => {
	return (
		<div>
			<Header />
			<ContributeForm />
		</div>
	);
};

export default AppRouter;
