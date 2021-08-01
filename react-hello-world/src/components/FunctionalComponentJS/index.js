// https://reactjs.org/docs/hooks-state.html
import { useState } from "react";

function FunctionalComponent(props) {
	const [count, setCount] = useState(0);

	return (
		<div>
			<p>{props.message}</p>
			<p>You clicked {count} times</p>
			<button onClick={() => setCount(count + 1)}>
				Click me
			</button>
		</div>
	  );
}

export default FunctionalComponent;
