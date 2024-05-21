import { getByLabelText, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import ToDo from "./ToDo";

describe("ToDo Component", () => {
  it("should input on screen", () => {
    render(<ToDo />);

    expect(
      screen.queryByPlaceholderText("Digite sua tarefa")
    ).toBeInTheDocument();
  });

  it("should create task", async () => {
    render(<ToDo />);

    // Change Input
    const input = screen.getByPlaceholderText("Digite sua tarefa");
    const textTitle = "Nova tarefa";
    await userEvent.type(input, textTitle);
    expect(screen.queryByDisplayValue(textTitle)).toBeInTheDocument();

    // Click button to add
    const button = screen.getByLabelText("Adicionar tarefa");
    await userEvent.click(button);
    expect(screen.queryByText("Nova tarefa")).toBeInTheDocument();

    // Verify remove text of the input
    expect(
      screen.queryByPlaceholderText("Digite sua tarefa")
    ).toBeInTheDocument();
  });

  it("should delete task", async () => {
    render(<ToDo />);

    // Change Input
    const input = screen.getByPlaceholderText("Digite sua tarefa");
    const textTitle = "Nova tarefa";
    await userEvent.type(input, textTitle);
    expect(screen.queryByDisplayValue(textTitle)).toBeInTheDocument();

    // Click button to add
    const buttonAdd = screen.getByLabelText("Adicionar tarefa");
    await userEvent.click(buttonAdd);
    expect(screen.queryByText(textTitle)).toBeInTheDocument();

    // Verify remove text of the input
    expect(
      screen.queryByPlaceholderText("Digite sua tarefa")
    ).toBeInTheDocument();

    // Verify button of delete on screen
    // Click button to delete
    const buttonDelete = screen.getByLabelText(`Deletar tarefa: ${textTitle}`);
    await userEvent.click(buttonDelete);
    expect(screen.queryByText(textTitle)).not.toBeInTheDocument();
  });
});
