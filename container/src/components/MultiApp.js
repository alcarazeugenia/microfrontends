import React from "react";
import AngularApp from "./multiApp/MultiAppLeft";
import ReactApp from "./multiApp/MultiAppRight";

const MultiApp = () => {
	return (
		<>
			<AngularApp />
			<ReactApp />
		</>
	);
};

export default MultiApp;
