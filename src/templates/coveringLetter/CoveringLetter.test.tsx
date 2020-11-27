import { screen } from "@testing-library/dom";
import { render } from "@testing-library/react";
import React from "react";
import { CoveringLetterTemplate } from "./CoveringLetter";
import { coveringLetter } from "./sample";
HTMLCanvasElement.prototype.getContext = jest.fn(); // eslint-disable-line

describe("covering Letter", () => {
  it("should render the cover letter correctly", () => {
    render(<CoveringLetterTemplate document={coveringLetter} handleObfuscation={() => {}} />);

    expect(screen.getAllByText("Documents Bundle")).toHaveLength(1);
  });
});
