import { render, screen } from "@testing-library/react"
import SubmitButton from "@/components/form/submit-button"


describe("Submit Button component", () => {

  const mockProps = {disabled: false, action: "Test"}

  test("should render properly", () => {
    render(<SubmitButton disabled={mockProps.disabled} action={mockProps.action} />);
    screen.getByRole("button");
  });

  test("should receive props", () => {
    render(<SubmitButton disabled={mockProps.disabled} action={mockProps.action} />);
    screen.getByText(/Test/);
  });


});
