import React, { Component } from "react";
import PropTypes from "prop-types";

class Items extends Component {
	createTasks(item) {
		return <li key={item.key}>{item.text}</li>;
	}

	render() {
		var Entries = this.props.entries;
		var listItems = Entries.map(this.createTasks);

		return <ul className="theList">{listItems}</ul>;
	}
}

Items.propTypes = {
	entries: PropTypes.string
};

export default Items;
