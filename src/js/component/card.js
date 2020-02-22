import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

export function Card(props) {
	const [list, setlist] = useState([]);
	const [content, setContent] = useState();

	return (
		<div className="card">
			<div className="card-body">
				<div className="text-center">
					<div className="result">
						{props.one} {props.two}
					</div>
				</div>
			</div>
		</div>
	);
}

Card.propTypes = {
	one: PropTypes.string,
	two: PropTypes.bool
};
