import "./LanguageButton.css";
import { memo, useState } from "react";
import { toggleStoredLanguage } from "../../../utils/setLocalStorage";
import { motion } from "framer-motion";

function LanguageButton({ lang }) {
	const langs = ["pl", "en"];
	const secondLang = langs.filter((ln) => ln !== lang);

	const [label, setLabel] = useState(secondLang[0].toUpperCase());

	function toggleLanguageHandler() {
		const currentLang = toggleStoredLanguage();
		setLabel(currentLang.toUpperCase());
		window.location.reload(true);
	}

	const buttonTooltip =
		lang === "en"
			? `Change the language to ${secondLang[0].toUpperCase()}`
			: `Zmień język na ${secondLang[0].toUpperCase()}`;

	const buttonVariants = {
		//same as for the CustomButtom component
		hidden: {
			opacity: 0,
			y: -100,
		},
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				delay: 0.5,
				duration: 0.6,
			},
		},
	};

	return (
		<motion.div
			variants={buttonVariants}
			initial="hidden"
			animate="visible"
			className="lang-button-container"
		>
			<button data-lang-change={buttonTooltip} onClick={toggleLanguageHandler}>
				{label}
			</button>
		</motion.div>
	);
}

export default memo(LanguageButton);
