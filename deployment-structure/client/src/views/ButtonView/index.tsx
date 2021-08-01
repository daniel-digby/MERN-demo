import React from "react";
import { Button } from "semantic-ui-react";
import styles from "./ButtonView.module.css";

const ButtonView = (): JSX.Element => {
	return (
		<div>
			<div className={styles.container}>this view has a button</div>
			<Button>Click Here</Button>
		</div>
	);
};
export default ButtonView;
