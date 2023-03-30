import "@testing-library/jest-dom";
import "jest-canvas-mock";
import { render, screen, waitFor } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Main from "../Main";

const MockMain = () => {
	const mockFunc = jest.fn();

	return (
		<Router>
			<Main callback={mockFunc} />
		</Router>
	);
};

const delayOffset = 100;
const titleDelay = 500 + delayOffset;
const buttonDelay = 1500 + delayOffset;
const lottieDelay = 2000 + delayOffset;

describe("elements appearance after the animations has been completed", () => {
	test("title animation should appear after 0.5 seconds (500ms) of the delay being set", async () => {
		render(<MockMain />);
		const mainTitle = screen.getByRole("heading");

		expect(mainTitle).not.toBeVisible();

		await waitFor(() => expect(mainTitle).toBeVisible(), {
			timeout: titleDelay,
		});
	});

	test("button animation should appear after 1.5 seconds (1500ms) of the delay being set", async () => {
		render(<MockMain />);
		const mainButton = screen.getByTestId("button-main");

		expect(mainButton).not.toBeVisible();

		await waitFor(() => expect(mainButton).toBeVisible(), {
			timeout: buttonDelay,
		});
	});

	test("lottie animation should appear after 2 seconds (2000ms) of the delay being set", async () => {
		render(<MockMain />);
		const mainLottie = screen.getByTestId("lottie-main");

		expect(mainLottie).not.toBeVisible();

		await waitFor(() => expect(mainLottie).toBeVisible(), {
			timeout: lottieDelay,
		});
	});
});
