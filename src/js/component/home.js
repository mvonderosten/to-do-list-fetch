import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import { Header } from "../component/header";
import { Card } from "../component/card";

//create your first component

export function Home() {
	const [list, setlist] = useState([]);
	const [content, setContent] = useState();
	const [remove, setRemove] = useState("");

	return (
		<>
			<h1>To Do List</h1>
			<Card />
		</>
	);
}
