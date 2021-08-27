import { Document } from "@govtechsg/decentralized-renderer-react-components";

export interface BankGuarantee extends Document {
  name: string;
  logo?: string;
  remarks?: string;
  backgroundColor?: string;
  remarksColor?: string;
  issueDate?: string;
  effectiveDate?: string;
  expiryDate?: string;
  guaranteedAmount?: string;
  vendorName?: string;
  vendorAddress?: string;
  vendorRef?: string;
  beneficiaryName?: string;
  beneficiaryAddress?: string;
  guarantorName?: string;
  guarantorAddress?: string;
  guarantorRef?: string;
  supportingDoc?: string;
  links?: {
    self: {
      href: string;
    };
  };
}
