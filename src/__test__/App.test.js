import "@testing-library/jest-dom";
import "jest-canvas-mock";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import App from "../App";
import { Provider } from "react-redux";
import { store } from "../redux/store";

const MockApp = () => {
	return (
		<Provider store={store}>
			<Router>
				<App />
			</Router>
		</Provider>
	);
};

const delayOffset = 100;
const buttonDelay = 500 + delayOffset;
const popupDelay = 100;

test("popup should appear after the header's button click", async () => {
	render(<MockApp />);
	const headerPopupButton = screen.getByTestId("header-popup-button");

	expect(headerPopupButton).not.toBeVisible();

	await waitFor(() => expect(headerPopupButton).toBeVisible(), {
		timeout: buttonDelay,
	});

	fireEvent.click(headerPopupButton);

	const headerPopup = screen.getByTestId("header-popup");

	await waitFor(() => expect(headerPopup).toBeVisible(), {
		timeout: popupDelay,
	});
});
