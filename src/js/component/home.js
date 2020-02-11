import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
//import { Header } from "../component/header";
//import { Card } from "../component/card";

//create your first component
export function Home() {
	const [list, setlist] = useState([]);
	const [content, setContent] = useState();

	return (
		<>
			<div className="text-center mt-5">
				<input
					value={content}
					onChange={e => setContent(e.target.value)}
					onKeyPress={e => {
						if (e.key === "Enter") {
							setlist(list.concat(content));
							setContent("");
						}
					}}
				/>
				{list.map((item, index) => {
					return <div key={index}>{item}</div>;
				})}
				;
			</div>
		</>
	);
}
