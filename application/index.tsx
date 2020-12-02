import React from "react";
import ReactDOM from "react-dom";
import { coveringLetter } from "../src/templates/coveringLetter/sample";
import { invoice } from "../src/templates/invoice/sample";
import { letterCredit } from "../src/templates/letterCredit/sample";
import { cugeCert } from "../src/templates/cugeCert/sample";
import { blCertificate } from "../src/templates/billOfLading/billOfLadingSample";
import { App } from "./app";

ReactDOM.render(
  <App
    documents={[
      { name: "Generic Templates - Covering Letter", document: coveringLetter },
      { name: "Generic Templates - Invoice", document: invoice },
      { name: "Generic Templates - Letter of Credit", document: letterCredit },
      { name: "Generic Templates - Certificate in Therapeutic Horticulture", document: cugeCert },
      { name: "Generic Templates - Bill of Lading", document: blCertificate }
    ]}
  />,
  document.getElementById("root")
);
