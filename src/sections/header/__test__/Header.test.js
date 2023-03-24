import "@testing-library/jest-dom";
import { render, screen, waitFor } from "@testing-library/react";
import Header from "../Header";
import { BrowserRouter as Router } from "react-router-dom";
import CustomButton from "../../../components/UI/CustomButton";

const MockHeader = ({ title, children }) => (
	<Router>
		<Header title={title} onBurgerClick={() => {}}>
			<CustomButton onClick={() => {}}>logo</CustomButton>
		</Header>
	</Router>
);

test("button should appear as the animation finished", async () => {
	render(<MockHeader title="Header test" />);
	const logoButtonElement = screen.getByText(/logo/i);

	expect(logoButtonElement).not.toBeVisible();

	await waitFor(() => {
		expect(logoButtonElement).toBeVisible();
	});
});
