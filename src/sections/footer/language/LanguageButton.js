import { memo, useState } from "react";
import { toggleStoredLanguage } from "../../../utils/setLocalStorage";
import "./LanguageButton.css";

function LanguageButton({ lang }) {
	const [label, setLabel] = useState(lang.toUpperCase());

	const langs = ["pl", "en"];
	const secondLang = langs.filter((ln) => ln !== lang);

	function toggleLanguageHandler() {
		const currentLang = toggleStoredLanguage();
		setLabel(currentLang.toUpperCase());
		window.location.reload(true);
	}

	const buttonTooltip =
		lang === "en"
			? `Change the language to ${secondLang[0].toUpperCase()}`
			: `Zmień język na ${secondLang[0].toUpperCase()}`;

	return (
		<div className="lang-button-container">
			<button data-lang-change={buttonTooltip} onClick={toggleLanguageHandler}>
				{label}
			</button>
		</div>
	);
}

export default memo(LanguageButton);
