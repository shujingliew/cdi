import React from "react";
import ReactDOM from "react-dom";
import { coveringLetter } from "../src/templates/coveringLetter/sample";
import { invoice } from "../src/templates/invoice/sample";
import { letterCredit } from "../src/templates/letterCredit/sample";
import { App } from "./app";

ReactDOM.render(
  <App
    documents={[
      { name: "Generic Templates - Covering Letter", document: coveringLetter },
      { name: "Generic Templates - Invoice", document: invoice },
      { name: "Generic Templates - Letter of Credit", document: letterCredit }
    ]}
  />,
  document.getElementById("root")
);
