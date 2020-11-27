import { screen } from "@testing-library/dom";
import { render } from "@testing-library/react";
import React from "react";
import { CugeCertTemplate } from "./CugeCert";
import { cugecert } from "./sample";

describe("Cuge Certifcation", () => {
  it("should render the CUGE Certification correctly", () => {
    render(<CugeCertTemplate document={cugecert} handleObfuscation={() => {}} />);

    expect(screen.getAllByText("Documents Bundle")).toHaveLength(1);
  });
});
