import { screen } from "@testing-library/dom";
import { render } from "@testing-library/react";
import React from "react";
import { CugeCertTemplate } from "./CugeCert";
import { cugeCert } from "./sample";
HTMLCanvasElement.prototype.getContext = jest.fn(); // eslint-disable-line

describe("cuge Certifcation", () => {
  it("should render the CUGE Certification correctly", () => {
    render(<CugeCertTemplate document={cugeCert} handleObfuscation={() => {}} />);

    expect(screen.getAllByText("Annie Young Kheng Mui")).toHaveLength(1);
  });
});
