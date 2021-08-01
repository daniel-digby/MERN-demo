import React from "react";
import styles from "./BaseView.module.css";

const BaseView = (): JSX.Element => {
	// api call
	return (
		<div>
			<div className={styles.container}>this is our base homepage</div>
			{/* return some dynamic data */}
		</div>
	);
};
export default BaseView;
