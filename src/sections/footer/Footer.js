import "./Footer.css";
import { useSelector } from "react-redux";
import Clock from "./clock/Clock";

function Footer() {
	const { countryData } = useSelector((state) => state.newsReducer);

	const articlesDisplayedTotal = countryData.articles?.length;

	return (
		<footer className="footer">
			{countryData.status !== "error" && (
				<p id="ok">Articles found: {articlesDisplayedTotal}</p>
			)}
			{countryData.status === "error" && (
				<p id="error">Error: {countryData.message}</p>
			)}
			<Clock />
		</footer>
	);
}

export default Footer;
