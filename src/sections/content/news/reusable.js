export async function getFailedCountryName(code, callback) {
	const response = await fetch(`https://restcountries.com/v3.1/alpha/${code}`);
	const countryData = await response.json();
	callback({
		isFailed: true,
		country: countryData[0]?.name.common,
	});
}
