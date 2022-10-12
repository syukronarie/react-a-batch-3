import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import SignInPage from "../SignInPage";

describe("SignInPage Testing", () => {
	it("SignInPage Snapshot", () => {
		const { container } = render(<SignInPage />);
		expect(container).toMatchSnapshot();
	});

	it("should hit handle submit correctly", () => {
		render(<SignInPage />);
		const submitButton = screen.getByTestId("button-submit");
		userEvent.click(submitButton);
	});

	it("should render submit button as Sign In", () => {
		render(<SignInPage />);
		const submitButton = screen.getByTestId("button-submit");
		expect(submitButton).toHaveTextContent(/sign in/i);
	});
});
