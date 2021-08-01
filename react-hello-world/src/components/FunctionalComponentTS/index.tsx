import { useState } from "react";

type ComponentProps = {
    message: string;
}; 

const FunctionalComponent = ({ message }: ComponentProps) => {
    const [count, setCount] = useState(0);

    return (
		<div>
            <p>{message}</p>
		    <p>You clicked {count} times</p>
		    <button onClick={() => setCount(count + 1)}>
		        Click me
		    </button>
		</div>
	);
};

export default FunctionalComponent;