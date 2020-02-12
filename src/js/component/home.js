import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import { Header } from "../component/header";

//create your first component

export function Home() {
	const [list, setlist] = useState([]);
	const [content, setContent] = useState();

	return (
		<>
			<Header />
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
				<div id="close">
					{list.map((item, index) => {
						return (
							<div key={index}>
								<button
									className="close"
									onClick="document.getElementById('close').style.display='none'">
									x
								</button>
								<span id="remove">
									{"I need to "} {item}
								</span>
							</div>
						);
					})}
				</div>
			</div>
		</>
	);
}
