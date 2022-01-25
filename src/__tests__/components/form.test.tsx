import { render, screen } from "@testing-library/react"
import Form from "@/components/form/form"
import Input from "@/components/form/input"
import SubmitButton from "@/components/form/submit-button"

describe("Form component", () => {

  const formMockProps = {
    handleSubmit: () => {},
    children: [Input, SubmitButton],
    title: "Test",
    titleColour: "test"
  }

  const inputMockProps = {
    type: "text",
    name: "test",
    placeholder: "this is a test placeholder",
    handleChange: () => {},
    minLength: 255,
    value: "test",
    textColour: "test"
  }

  const submitButtonMockProps = {
    disabled: false,
    action: "Test"
  }

  test("should render properly", () => {
    render(<Form
      handleSubmit={formMockProps.handleSubmit}
      title={formMockProps.title}
      titleColour={formMockProps.titleColour}
      >
        <Input
          type={inputMockProps.type}
          name={inputMockProps.name}
          placeholder={inputMockProps.placeholder}
          handleChange={inputMockProps.handleChange}
          minLength={inputMockProps.minLength}
          value={inputMockProps.value}
          textColour={inputMockProps.textColour} />);
        <SubmitButton
          disabled={submitButtonMockProps.disabled}
          action={submitButtonMockProps.action} />
      </Form>)

    screen.getByPlaceholderText(/this is a test placeholder/)
    screen.getByRole("button");
    screen.getAllByText(/Test/);
  })
})
