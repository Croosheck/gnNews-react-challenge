export async function getArticlesData(country) {
	const key = process.env.REACT_APP_API_KEY;

	const response = await fetch(
		`https://newsapi.org/v2/top-headlines?country=${country}&apiKey=${key}`
	);

	const data = await response.json();

	return data;
}
