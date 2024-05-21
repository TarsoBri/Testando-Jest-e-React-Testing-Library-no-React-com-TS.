import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import Test from "./Test";

describe("Test Component", () => {
  it("should render", () => {
    render(<Test />);

    screen.getByText(/testando com jest/i);
  });

  it("should paragraph is not in the document", () => {
    render(<Test />);

    screen.queryByText(/habilitado/i);

    const button = screen.getByRole("button", { name: /clique aqui!/i });

    fireEvent.click(button);

    const textTest = screen.queryByText(/desabilitado/i);

    expect(textTest).not.toBeInTheDocument();
  });
});
