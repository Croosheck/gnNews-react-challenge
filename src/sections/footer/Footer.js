import "./Footer.css";
import { useSelector } from "react-redux";
import Clock from "./clock/Clock";
import { memo } from "react";
import { motion } from "framer-motion";
import LanguageButton from "./language/LanguageButton";
import { langData } from "../../appConfig";

function Footer({ lang }) {
	const { countryData } = useSelector((state) => state.newsReducer);
	const { counter, errorLabel } = langData.footer;

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
			<div className="footer-language-counter-container">
				<LanguageButton lang={lang} />
				<p id="articles-count">
					{counter[lang]}: {articlesDisplayedTotal}
				</p>
				{countryData.status === "error" && (
					<p id="error">
						{errorLabel[lang]}: {countryData.message}
					</p>
				)}
			</div>
			<Clock />
		</motion.footer>
	);
}

export default memo(Footer);
