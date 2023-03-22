export function formatDate(date, part = String()) {
	const newDate = new Date(date);

	const year = newDate.getFullYear().toString();
	const month = (newDate.getMonth() + 1).toString().padStart(2, 0);
	const day = newDate.getDate().toString().padStart(2, 0);
	const hours = newDate.getHours().toString();
	const minutes = newDate.getMinutes().toString();
	const time = `${hours.padStart(2, 0)}:${minutes.padStart(2, 0)}`;

	const formatedDate = `${day}-${month}-${year} ${time}`;

	if (part) {
		if (part === "onlyDate") {
			const onlyDate = `${day}-${month.padStart(2, 0)}-${year}`;
			return onlyDate;
		}
		if (part === "onlyTime") {
			const onlyTime = `${time}`;
			return onlyTime;
		}
	}

	return formatedDate;
}
