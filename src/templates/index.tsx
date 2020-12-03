import { TemplateRegistry } from "@govtechsg/decentralized-renderer-react-components";
import { templates as blTemplates } from "./billOfLading";
import { templatesEM as blTemplatesEM } from "./billOfLadingEM";
import { templatesShell as blTemplatesShell } from "./billOfLadingShell";
import { templates } from "./coveringLetter";
import { cugeCertTemplate } from "./cugeCert";
import { invoiceTemplate } from "./invoice";
import { letterCreditTemplate } from "./letterCredit";

export const registry: TemplateRegistry<any> = {
  COVERING_LETTER: templates,
  LETTER_CREDIT: letterCreditTemplate,
  CUGE_CERT: cugeCertTemplate,
  BILL_OF_LADING: blTemplates,
  BILL_OF_LADING_EM: blTemplatesEM,
  BILL_OF_LADING_SHELL: blTemplatesShell,
  INVOICE: invoiceTemplate
};
