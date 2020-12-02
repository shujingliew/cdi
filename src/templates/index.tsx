import { TemplateRegistry } from "@govtechsg/decentralized-renderer-react-components";
import { templates } from "./coveringLetter";
import { invoiceTemplate } from "./invoice";
import { letterCreditTemplate } from "./letterCredit";
import { cugeCertTemplate } from "./cugeCert";
//import { templates as blTemplates } from "./billOfLading";

export const registry: TemplateRegistry<any> = {
  COVERING_LETTER: templates,
  LETTER_CREDIT: letterCreditTemplate,
  CUGE_CERT: cugeCertTemplate,
  //BILL_OF_LADING: blTemplates,
  INVOICE: invoiceTemplate
};
