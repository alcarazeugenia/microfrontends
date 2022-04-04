import React from "react";
import { Switch, Route, Router } from "react-router-dom";
import {
	StylesProvider,
	createGenerateClassName,
} from "@material-ui/core/styles";

import Landing from "./components/Landing";
import Second from "./components/Second";

const generateClassName = createGenerateClassName({
	productionPrefix: "ma",
});

export default ({ history }) => {
	return (
		<div>
			<StylesProvider generateClassName={generateClassName}>
				<Router history={history}>
					<Switch>
						<Route exact path="/second" component={Second} />
						<Route path="/" component={Landing} />
					</Switch>
				</Router>
			</StylesProvider>
		</div>
	);
};
