export function toggleLayout({
	data = {
		layouts: [],
	},
}) {
	let setLayout;

	const storedLayout = localStorage.getItem("layout");

	if (storedLayout) {
		const layoutsLength = data.layouts.length;
		const currentLayoutIndex = data.layouts.indexOf(storedLayout);

		//last item (set the first one)
		if (currentLayoutIndex === layoutsLength - 1) {
			setLayout = data.layouts[0];

			localStorage.setItem("layout", setLayout);
			return setLayout;
		}

		//set the following one
		setLayout = data.layouts[currentLayoutIndex + 1];

		localStorage.setItem("layout", setLayout);
		return setLayout;
	}

	setLayout = data.layouts[1];
	localStorage.setItem("layout", data.layouts[1]);

	return setLayout;
}

export function toggleStoredLanguage(toggleData = ["pl", "en"]) {
	const storedLang = localStorage.getItem("lang");

	if (storedLang) {
		const switchTo = toggleData.filter((lang) => lang !== storedLang);
		localStorage.setItem("lang", switchTo[0]);
		return switchTo[0];
	}

	localStorage.setItem("lang", toggleData[0]);
	return toggleData[0];
}
