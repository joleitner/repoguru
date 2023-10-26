import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import HomePage from "@/page";

describe("HomePage", () => {
  beforeEach(() => {
    render(<HomePage />);
  });

  it("should have a searchbar", () => {
    const searchbarField = screen.getByTestId("searchbar-field");
    const searchbarButton = screen.getByTestId("searchbar-button");
    expect(searchbarField).toBeInTheDocument();
    expect(searchbarButton).toBeInTheDocument();
  });
  //   it("should search", async () => {
  //     const searchbarField = screen.getByTestId("searchbar-field");
  //     const searchbarButton = screen.getByTestId("searchbar-button");

  //     // fireEvent.change(searchbarField, { target: { value: "test" } });
  //     // fireEvent.click(searchbarButton);
  //     console.log(searchbarField);
  //     expect(searchbarField).toHaveValue("test");

  //     // await waitFor(() => expect(fetch).toHaveBeenCalledTimes(1));
  //     // const gitUsers = screen.getByTestId("gituser-card");
  //   });
});
