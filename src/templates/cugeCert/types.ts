import { Document } from "@govtechsg/decentralized-renderer-react-components";

export interface CugeCertI extends Document {
  name: string;
  logo?: string;
  signatureD?: string;
  title?: string;
  issueDate?: string;
  titleColor?: string;
  backgroundColor?: string;
  remarksColor?: string;
  text1?: string;
  text2?: string;
  text3?: string;
  field1?: string;
  links?: {
    self: {
      href: string;
    };
  };
}
