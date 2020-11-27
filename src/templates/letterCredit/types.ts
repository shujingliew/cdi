import { Document } from "@govtechsg/decentralized-renderer-react-components";

export interface LetterCredit extends Document {
  name: string;
  logo?: string;
  title?: string;
  remarks?: string;
  titleColor?: string;
  backgroundColor?: string;
  remarksColor?: string;
  creditNum?: string;
  issueDate?: string;
  partialShipments?: string;
  transhipment?: string;
  links?: {
    self: {
      href: string;
    };
  };
}
