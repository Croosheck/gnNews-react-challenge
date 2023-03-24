import "./Footer.css";
import { useSelector } from "react-redux";
import Clock from "./clock/Clock";
import { memo } from "react";
import { motion } from "framer-motion";

function Footer() {
	const { countryData } = useSelector((state) => state.newsReducer);

	const articlesDisplayedTotal = countryData.articles?.length;

	const footerVariants = {
		hidden: {
			opacity: 0,
			y: 20,
		},
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 0.8,
				delay: 2.5,
			},
		},
	};

	return (
		<motion.footer
			className="footer"
			variants={footerVariants}
			initial="hidden"
			animate="visible"
		>
			<p id="articles-count">Articles found: {articlesDisplayedTotal}</p>
			{countryData.status === "error" && (
				<p id="error">Error: {countryData.message}</p>
			)}
			<Clock />
		</motion.footer>
	);
}

export default memo(Footer);
