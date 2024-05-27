import { render, screen } from "@testing-library/react";
import Greeting from "./Greeting";
import userEvent from "@testing-library/user-event";

describe("Greeting component tests", () => {
  //Test 1
  test("Test for greeting", () => {
    //Arrange
    render(<Greeting />);

    //Act
    //...nothing

    //Assert

    const myTextElement = screen.getByText("Test h2", { exact: false });
    expect(myTextElement).toBeInTheDocument();
  });
  //Test 2
  test("For conditional text", () => {
    render(<Greeting />);
    const myTextElement = screen.getByText("Test para", { exact: true });
    expect(myTextElement).toBeInTheDocument();
  });

  test("Button click renders 'Changed' ", () => {
    //Arrange
    render(<Greeting />);
    //Act
    const buttonEl = screen.getByRole("button");
    userEvent.click(buttonEl);
    //Assert
    const finalEl = screen.getByText("Changed");
    expect(finalEl).toBeInTheDocument();
  });

  test("Button click removes conditional text ", () => {
    //Arrange
    render(<Greeting />);
    //Act
    const buttonEl = screen.getByRole("button");
    userEvent.click(buttonEl);
    //Assert
    const finalEl = screen.queryByText("Test para", { exact: false });
    expect(finalEl).toBeNull();
  });
});
