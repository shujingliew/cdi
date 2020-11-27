import { screen } from "@testing-library/dom";
import { render } from "@testing-library/react";
import React from "react";
import { LetterCreditTemplate } from "./LetterCredit";
import { letterCredit } from "./sample";
HTMLCanvasElement.prototype.getContext = jest.fn(); // eslint-disable-line

describe("letter of Credit", () => {
  it("should render the letter of credit correctly", () => {
    render(<LetterCreditTemplate document={letterCredit} handleObfuscation={() => {}} />);

    expect(screen.getAllByText("123456")).toHaveLength(1);
  });
});
