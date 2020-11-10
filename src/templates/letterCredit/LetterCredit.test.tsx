import { screen } from "@testing-library/dom";
import { render } from "@testing-library/react";
import React from "react";
import { LetterCreditTemplate } from "./LetterCredit";
import { letterCredit } from "./sample";

describe("Letter of Credit", () => {
  it("should render the letter of credit correctly", () => {
    render(<LetterCreditTemplate document={letterCredit} handleObfuscation={() => {}} />);

    expect(screen.getAllByText("Documents Bundle")).toHaveLength(1);
  });
});
