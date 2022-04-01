import React, { Suspense, lazy } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import MarketingApp from "./components/MarketingApp";
import Header from "./components/Header";
import {
	StylesProvider,
	createGenerateClassName,
} from "@material-ui/core/styles";
const DashboardLazy = lazy(() => import("./components/DashboardApp"));

const generateClassName = createGenerateClassName({
	productionPrefix: "co",
});

export default () => {
	return (
		<BrowserRouter>
			<StylesProvider generateClassName={generateClassName}>
				<Header />
				<Suspense fallback="...loading">
					<Switch>
						<Route path="/dashboard" component={DashboardLazy} />
						<Route path="/" component={MarketingApp} />
					</Switch>
				</Suspense>
				<MarketingApp />
			</StylesProvider>
		</BrowserRouter>
	);
};
