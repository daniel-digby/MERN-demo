import React from "react";
import styles from "./BaseView.module.css";

const BaseView = (): JSX.Element => {
	return (
		<div>
			<div className={styles.container}>this is our base homepage</div>
		</div>
	);
};
export default BaseView;
