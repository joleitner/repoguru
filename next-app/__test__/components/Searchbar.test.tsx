import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Searchbar from "@/components/Searchbar";

const mockHandleSearch = jest.fn();

describe("SearchBar", () => {
  describe("User searchbar", () => {
    beforeEach(() => {
      render(
        <Searchbar
          searchType="user"
          searchTerm=""
          setSearchTerm={() => {}}
          handleSearch={mockHandleSearch}
        />
      );
    });

    it("should have a textfield and button", () => {
      const searchbarField = screen.getByTestId("searchbar-field");
      expect(searchbarField).toBeInTheDocument();
      const inputElement = searchbarField.querySelector("input");
      expect(inputElement).toHaveAttribute("placeholder", "Find a user...");
      const searchbarButton = screen.getByTestId("searchbar-button");
      expect(searchbarButton).toBeInTheDocument();
    });

    it("should call handleSearch when clicked", async () => {
      const searchbarButton = screen.getByTestId("searchbar-button");
      await userEvent.click(searchbarButton);
      expect(mockHandleSearch).toBeCalled();
    });
  });

  describe("User searchbar", () => {
    beforeEach(() => {
      render(
        <Searchbar
          searchType="repository"
          searchTerm=""
          setSearchTerm={() => {}}
          handleSearch={mockHandleSearch}
          languageOptions={["JavaScript", "TypeScript"]}
          setLanguage={() => {}}
        />
      );
    });

    it("should have a textfield, button and language filter", () => {
      const searchbarField = screen.getByTestId("searchbar-field");
      expect(searchbarField).toBeInTheDocument();
      const inputElement = searchbarField.querySelector("input");
      expect(inputElement).toHaveAttribute(
        "placeholder",
        "Find a repository..."
      );
      const searchbarButton = screen.getByTestId("searchbar-button");
      expect(searchbarButton).toBeInTheDocument();
      const languageFilter = screen.getByTestId("language-filter");
      expect(languageFilter).toBeInTheDocument();
    });
  });
});
