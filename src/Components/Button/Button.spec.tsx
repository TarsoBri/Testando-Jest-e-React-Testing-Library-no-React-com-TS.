import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Button from "./Button";

describe("Button Component", () => {
  it("should render witch red background if disabled", () => {
    render(
      <Button onClick={() => {}} disabled={false}>
        Click Aqui!
      </Button>
    );

    const button = screen.getByRole("button", { name: "Click Aqui!" });

    expect(button).toHaveStyle({ backgroundColor: "red" });
  });

  it("should call onClick prop on click", () => {
    const onClick = jest.fn();

    render(
      <Button onClick={onClick} disabled>
        Click Aqui!
      </Button>
    );

    const button = screen.getByText(/click aqui!/i);

    fireEvent.click(button);

    expect(onClick).toHaveBeenCalled(); // toHaveBennCalledWith para testar func com params
  });
});
