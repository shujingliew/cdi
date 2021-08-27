import { BankGuarantee } from "./types";

export const bankGuarantee: BankGuarantee = {
  name: "Bank Guarantee",
  issueDate: "7 Apr 2021",
  effectiveDate: "7 Apr 2021",
  expiryDate: "31 Mar 2022",
  guaranteedAmount: "S$31,448.30",
  vendorName: "DXC Technology",
  vendorAddress: "1 Depot Close #03-01 Singapore 109841",
  vendorRef: "#DE234-Gebiz-Ref",
  beneficiaryName: "MOF",
  beneficiaryAddress: "100 High Street #06-03 The Treasury Singapore 17934",
  guarantorName: "Citibank N.A",
  guarantorAddress: "8 Marina View, #16-01 Asia Square Tower 1 Singapore 018960",
  guarantorRef: "5941604234 (SG032621-004)",
  supportingDoc: "string",
  $template: {
    name: "BANK_GUARANTEE",
    type: "EMBEDDED_RENDERER",
    url: "http://localhost:3000"
  },
  links: {
    self: {
      href:
        "https://action.openattestation.com/?q=%7B%22type%22%3A%22DOCUMENT%22%2C%22payload%22%3A%7B%22uri%22%3A%22https%3A%2F%2Fapi-ropsten.tradetrust.io%2Fstorage%2F1df7a8b2-9998-44d0-acbb-d0598f883aba%22%2C%22key%22%3A%228ff52a5980543346784e16fd9834aeadc38c4bfe28394d3bb7449ada2f40efaf%22%2C%22permittedActions%22%3A%5B%22STORE%22%5D%2C%22redirect%22%3A%22https%3A%2F%2Fdev.tradetrust.io%2F%22%7D%7D"
    }
  }
};
