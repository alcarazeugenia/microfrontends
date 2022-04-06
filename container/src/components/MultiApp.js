import React from "react";
import AngularApp from "./multiApp/MultiAppLeft";
import Marketing from "./MarketingApp";

const MultiApp = () => {
	return (
		<>
			<div>I'm multi App!</div>
			<AngularApp />
			<Marketing />
		</>
	);
};

export default MultiApp;
