import React, { Component } from "react";
import { Items } from "../component/items";

class Card extends Component {
	constructor(props) {
		super(props);

		this.state = {
			items: []
		};

		this.addItem = this.addItem.bind(this);
	}

	addItem(e) {
		if (this._inputElement.value !== "") {
			var newItem = {
				text: this._inputElement.value,
				key: Date.now()
			};

			this.setState(prevState => {
				return {
					items: prevState.items.concat(newItem)
				};
			});

			this._inputElement.value = "";
		}

		console.log(this.state.items);

		e.preventDefault();
	}

	render() {
		return (
			<div className="card">
				<div className="card-body">
					<form onSubmit={this.addItem}>
						<input
							ref={a => (this._inputElement = a)}
							placeholder="enter task"
						/>
						<div className="form-group">
							<label htmlFor="formGroupExampleInput" />
							<input
								type="text"
								className="form-control"
								id="formGroupExampleInput"
								placeholder="What Tasks Do I Have?"
							/>
						</div>
					</form>
				</div>
				<Items entries={this.state.items} />
			</div>
		);
	}
}

export default Card;
