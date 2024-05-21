import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import axios from "axios";
import Tasks from "./Tasks";

jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe("Tasks Component", () => {
  it("should fetch and show tasks on button click", async () => {
    mockedAxios.get.mockImplementation((url) => {
      if (url === "https://jsonplaceholder.typicode.com/todos?_limit=10") {
        return Promise.resolve({
          data: [
            { userId: 1, id: 1, title: "delectus aut autem", completed: false },
            {
              userId: 1,
              id: 2,
              title: "quis ut nam facilis et officia qui",
              completed: false,
            },
          ],
        });
      } else {
        return Promise.reject(new Error("Not Found"));
      }
    });

    render(<Tasks />);

    const button = screen.getByText(/get tasks from api/i);

    expect(screen.queryByText("delectus aut autem")).not.toBeInTheDocument();

    fireEvent.click(button);

    await screen.findByText(/delectus aut autem/i);
    await screen.findByText(/quis ut nam facilis et officia qui/i);
  });

  it("should show error message on fetch error", async () => {
    mockedAxios.get.mockRejectedValue(new Error("Network Error")); // Simula um erro

    render(<Tasks />);

    expect(screen.queryByText("Network Error")).not.toBeInTheDocument();

    const button = screen.getByText(/get tasks from api/i);

    fireEvent.click(button);

    await screen.findByText(/Network Error/i);
  });
});
