import { useSelector } from "react-redux";
import "./Footer.css";
import Clock from "./clock/Clock";

function Footer() {
	const { countryData } = useSelector((state) => state.newsReducer);

	const articlesDisplayedTotal = countryData.articles.length;

	return (
		<footer className="footer">
			<p>Articles found: {articlesDisplayedTotal}</p>
			<Clock />
		</footer>
	);
}

export default Footer;
