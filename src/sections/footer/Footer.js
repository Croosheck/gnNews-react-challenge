import "./Footer.css";
import { useSelector } from "react-redux";
import Clock from "./clock/Clock";
import { memo } from "react";

function Footer() {
	const { countryData } = useSelector((state) => state.newsReducer);

	const articlesDisplayedTotal = countryData.articles?.length;

	return (
		<footer className="footer">
			<p id="articles-count">Articles found: {articlesDisplayedTotal}</p>
			{countryData.status === "error" && (
				<p id="error">Error: {countryData.message}</p>
			)}
			<Clock />
		</footer>
	);
}

export default memo(Footer);
