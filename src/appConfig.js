export const LAYOUTS = ["default", "list"];
export const DUMMY_ARTICLES = [
	{
		title: "Test Title 1",
		publishedAt: 1679453148520,
		author: "Leeroy Jenkins",
	},
	{
		title: "Test Title 2",
		publishedAt: 1679453148520,
		author: "Leeroy Jenkins",
	},
	{
		title: "Test Title 3",
		publishedAt: 1679453148520,
		author: "Leeroy Jenkins",
	},
	{
		title: "Test Title 4",
		publishedAt: 1679453148520,
		author: "Leeroy Jenkins",
	},
	{
		title: "Test Title 5",
		publishedAt: 1679453148520,
		author: "Leeroy Jenkins",
	},
	{
		title: "Test Title 6",
		publishedAt: 1679453148520,
		author: "Leeroy Jenkins",
	},
	{
		title: "Test Title 7",
		publishedAt: 1679453148520,
		author: "Leeroy Jenkins",
	},
	{
		title: "Test Title 8",
		publishedAt: 1679453148520,
		author: "Leeroy Jenkins",
	},
	{
		title: "Test Title 9",
		publishedAt: 1679453148520,
		author: "Leeroy Jenkins",
	},
	{
		title: "Test Title 10",
		publishedAt: 1679453148520,
		author: "Leeroy Jenkins",
	},
	{
		title: "Test Title 11",
		publishedAt: 1679453148520,
		author: "Leeroy Jenkins",
	},
	{
		title: "Test Title 12",
		publishedAt: 1679453148520,
		author: "Leeroy Jenkins",
	},
	{
		title: "Test Title 13",
		publishedAt: 1679453148520,
		author: "Leeroy Jenkins",
	},
];
export const DUMMY_COUNTRIES = {
	en: [
		{
			name: "Germany",
			short: "de",
		},
		{
			name: "USA",
			short: "us",
		},
		{
			name: "Great Britain",
			short: "gb",
		},
		{
			name: "Poland",
			short: "pl",
		},
		{
			name: "Czech Republic",
			short: "cz",
		},
		{
			name: "China",
			short: "cn",
		},
	],
	pl: [
		{
			name: "Niemcy",
			short: "de",
		},
		{
			name: "USA",
			short: "us",
		},
		{
			name: "Wielka Brytania",
			short: "gb",
		},
		{
			name: "Polska",
			short: "pl",
		},
		{
			name: "Czechy",
			short: "cz",
		},
		{
			name: "Chiny",
			short: "cn",
		},
	],
};

export const langData = {
	hero: {
		title: {
			en: "We bring the news, you bring the coffee.",
			pl: "My przynosimy wiadomości, ty przynosisz kawę.",
		},
		buttonLabel: {
			en: "Explore",
			pl: "Zaczynamy",
		},
	},

	drawer: {
		countries: DUMMY_COUNTRIES,
	},

	feed: {
		articleItem: {
			dateLabel: {
				en: "Published at",
				pl: "Opublikowano",
			},
			authorLabel: {
				en: "By",
				pl: "Przez",
			},
		},
		articleModal: {
			authorLabel: {
				en: "By",
				pl: "Przez",
			},
			buttonLabel: {
				en: "Open In New Tab",
				pl: "Otwórz w nowej karcie",
			},
		},
		warning: {
			noArticles: {
				en: "No articles has been found",
				pl: "Nie znaleziono żadnych artykułów",
			},
			forWord: {
				en: "for",
				pl: "dla",
			},
		},
	},

	footer: {
		counter: {
			en: "Articles No.",
			pl: "Artykułów",
		},
		errorLabel: {
			en: "Error",
			pl: "Błąd",
		},
	},

	popup: {
		default: {
			pl: "Projekt ten przyniósł mi dużo zabawy! Na duży plus klarowna, wypunktowana instrukcja - niebywale ułatwiająca pracę. Poprzez swoją aranżację, do pewnego stopnia chciałem pokazać, co potrafię i jak podchodzę do powierzonych mi zadań. Mam nadzieję, że z pozytywnym rezultatem 💪",
			en: "This project brought me a lot of fun! The clear, itemized instructions were a huge help in making the work easier. Through its arrangement, to some extent, I wanted to show what I can do and how I approach the tasks entrusted to me. I hope that it will result in a positive outcome 💪",
		},
		pros: {
			pl: "Najwięcej frajdy przy tego typu projektach zwykle sprawia mi zabawa z animacjami. Ten akurat dawał wiele miejsca na wtrącenie kilku subtelnych. Chętnie również przeprowadzam CIĘŻKIE ROZKMINY 🧠, wymagające analitycznego kombinowania - tego też tutaj nie brakło!",
			en: "I usually have the most fun with projects like this when playing around with animations. This one provided plenty of space to incorporate a few subtle ones. I also enjoy engaging in HEAVY BRAINWORK 🧠 that requires analytical thinking - which was also present here!",
		},
		cons: {
			pl: "Trudnością, niekoniecznie największą, aczkolwiek pierwszą, którą napotkałem, było sklonowanie repo z Githuba. Po krótkim researchu operacja zakończyła się sukcesem! Również właściwa konfiguracja layout'u w CSS potrafi czasami przyprawić o zawrót głowy... 😪",
			en: "The difficulty, not necessarily the biggest one but the first one I encountered, was cloning the repo from Github. After a short research, the operation was successful! Properly configuring the layout in CSS can also sometimes make you dizzy... 😪",
		},
	},

	other: {
		logoPrompt: {
			en: "Type something short",
			pl: "Wpisz coś krótkiego!",
		},
	},
};
