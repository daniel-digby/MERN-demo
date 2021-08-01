import { Component } from "react";

class ClassComponent extends Component {
    constructor(props) {
		super(props);
		this.state = {
			count: 0,
		};
	}

    render() {
        return (
            <div>
                {this.props.message} {this.state.count}
            </div>
        )
    }
}

export default ClassComponent;