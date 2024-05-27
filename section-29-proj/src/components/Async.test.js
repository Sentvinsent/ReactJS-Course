import { render, screen } from "@testing-library/react";
import Async from "./Async";

describe("Async component", () => {
  test("Renders posts if request succeeds", async () => {
    window.fetch = jest.fn();
    window.fetch.mockResolvedValueOnce({
      json: async (data) => [{ id: "p1", title: "first post" }],
    });
    render(<Async />);

    const listItemEl = await screen.findAllByRole("listitem");
    expect(listItemEl).not.toHaveLength(0);
  });
});
