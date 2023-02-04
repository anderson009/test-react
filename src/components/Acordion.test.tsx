import Acordion from "./Acordion";
import { render, screen, fireEvent } from "@testing-library/react";

describe("Acordion", () => {
  beforeEach(() => {
    render(
      <Acordion title="Hello">
        <h3>My content</h3>
        <p>Some content</p>
      </Acordion>
    );
  });
  test("should title all the time", () => {
    expect(screen.getByText("Hello")).toBeDefined();
  });

  test("should not content", () => {
    expect(screen.queryByAltText("content")).toBeNull();
  });

  test("should show the content when click", () => {
    const button =  screen.getByText(/open/i);
    fireEvent.click(button);
    expect(screen.queryByAltText(/content/i)).toBeDefined();
  });

  test("should hide show the content when click", () => {
    const button =  screen.getByText(/open/i);
    fireEvent.click(button);
    fireEvent.click(button);

    expect(screen.queryByAltText(/content/i)).toBeNull();
  });

  
});
