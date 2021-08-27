import { screen } from "@testing-library/dom";
import { render } from "@testing-library/react";
import React from "react";
import { BankGuaranteeTemplate } from "./BankGuarantee";
import { bankGuarantee } from "./sample";
HTMLCanvasElement.prototype.getContext = jest.fn(); // eslint-disable-line

describe("bank guarantee", () => {
  it("should render the bank guarantee correctly", () => {
    render(<BankGuaranteeTemplate document={bankGuarantee} handleObfuscation={() => {}} />);

    expect(screen.getAllByText("Bank Guarantee")).toHaveLength(1);
  });
});
