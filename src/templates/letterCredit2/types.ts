import { Document } from "@govtechsg/decentralized-renderer-react-components";

export interface LetterCredit2 extends Document {
  name: string;
  logo?: string;
  remarks?: string;
  backgroundColor?: string;
  remarksColor?: string;
  sellerName?: string;
  buyerName?: string;
  goodsDesc?: string;
  quantity?: string;
  price?: string;
  portOfLoading?: string;
  portOfDestination?: string;
  links?: {
    self: {
      href: string;
    };
  };
}
