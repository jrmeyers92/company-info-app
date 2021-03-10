import React from "react";
import Header from "../header/Header";
import { Switch } from "react-router-dom";

const AppRouter = () => {
	return (
		<Switch>
			<Header />
		</Switch>
	);
};

export default AppRouter;
