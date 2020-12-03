import React from "react";
import ReactDOM from "react-dom";
import { blCertificate } from "../src/templates/billOfLading/billOfLadingSample";
import { blCertificateEM } from "../src/templates/billOfLadingEM/billOfLadingEMSample";
import { blCertificateShell } from "../src/templates/billOfLadingShell/billOfLadingShellSample";
import { coveringLetter } from "../src/templates/coveringLetter/sample";
import { cugeCert } from "../src/templates/cugeCert/sample";
import { invoice } from "../src/templates/invoice/sample";
import { letterCredit } from "../src/templates/letterCredit/sample";
import { App } from "./app";

ReactDOM.render(
  <App
    documents={[
      { name: "Generic Templates - Covering Letter", document: coveringLetter },
      { name: "Generic Templates - Invoice", document: invoice },
      { name: "Generic Templates - Letter of Credit", document: letterCredit },
      { name: "Generic Templates - Certificate in Therapeutic Horticulture", document: cugeCert },
      { name: "Generic Templates - Bill of Lading", document: blCertificate },
      { name: "Generic Templates - Bill of Lading EM", document: blCertificateEM },
      { name: "Generic Templates - Bill of Lading Shell", document: blCertificateShell }
    ]}
  />,
  document.getElementById("root")
);
