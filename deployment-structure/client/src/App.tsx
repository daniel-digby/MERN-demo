import React from "react";
import { Route, Switch } from "react-router-dom";

// import our views
import ButtonView from "./views/ButtonView";
import TextView from "./views/TextView";
import BaseView from "./views/BaseView";

const App = (): JSX.Element => {
	return (
		<div>
			<Switch>
				<Route path="/button/" component={ButtonView} />
				<Route path="/text/" component={TextView} />
				<Route path="/" component={BaseView} />
			</Switch>
		</div>
	);
};

export default App;
