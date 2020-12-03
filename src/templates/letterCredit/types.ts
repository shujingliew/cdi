import { Document } from "@govtechsg/decentralized-renderer-react-components";

export interface LetterCredit extends Document {
  name: string;
  logo?: string;
  remarks?: string;
  titleColor?: string;
  backgroundColor?: string;
  remarksColor?: string;
  creditNum?: string;
  issueDate?: string;
  partialShipments?: string;
  sellerName?: string;
  buyerName?: string;
  goodsDesc?: string;
  quantity?: string;
  price?: string;
  portOfLoading?: string;
  portOfDestination?: string;
  transhipment?: string;
  links?: {
    self: {
      href: string;
    };
  };
}
