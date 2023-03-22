import { useEffect, useState } from "react";
import "./Clock.css";

function Clock() {
	const [currentTime, setCurrentTime] = useState(new Date());

	const userLanguage = navigator.language;

	const date = new Intl.DateTimeFormat(userLanguage, {
		day: "numeric",
		month: "numeric",
		year: "numeric",
		hour: "numeric",
		minute: "numeric",
		second: "numeric",
		weekday: "long",
	}).format(currentTime);

	useEffect(() => {
		const timer = setInterval(() => {
			setCurrentTime(new Date());
		}, 1000);

		return function cleanUp() {
			clearTimeout(timer);
		};
	}, []);

	return (
		<div className="clock-container">
			<p>{date}</p>
		</div>
	);
}

export default Clock;
