import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import { Header } from "../component/header";

//create your first component

export function Home() {
	const [list, setlist] = useState([]);
	const [content, setContent] = useState();
	const [remove, setRemove] = useState("");

	return (
		<>
			<Header />
			<div className="text-center">
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
					return (
						<div
							key={index}
							onClick={() =>
								setlist(list.filter(e => e !== item))
							}>
							{item}
						</div>
					);
				})}
			</div>
		</>
	);
}
