import { screen } from "@testing-library/dom";
import { render } from "@testing-library/react";
import React from "react";
import { LetterCredit2Template } from "./LetterCredit2";
import { letterCredit2 } from "./sample";
HTMLCanvasElement.prototype.getContext = jest.fn(); // eslint-disable-line

describe("letter of Credit2", () => {
  it("should render the letter of credit correctly", () => {
    render(<LetterCredit2Template document={letterCredit2} handleObfuscation={() => {}} />);

    expect(screen.getAllByText("123456")).toHaveLength(1);
  });
});
