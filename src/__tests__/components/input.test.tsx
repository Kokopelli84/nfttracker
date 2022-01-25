import { render, screen } from "@testing-library/react"
import Input from "@/components/form/input"

describe("Input component", () => {

  const mockProps = {
    type: "text",
    name: "test",
    placeholder: "this is a test placeholder",
    handleChange: () => {},
    minLength: 255,
    value: "test",
    textColour: "test"
  }

  test("should render props", () => {
    render(<Input
      type={mockProps.type}
      name={mockProps.name}
      placeholder={mockProps.placeholder}
      handleChange={mockProps.handleChange}
      minLength={mockProps.minLength}
      value={mockProps.value}
      textColour={mockProps.textColour} />);

    screen.getByPlaceholderText(/this is a test placeholder/);
    screen.getByDisplayValue("test");
  })
})
