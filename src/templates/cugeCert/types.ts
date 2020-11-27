import { Document } from "@govtechsg/decentralized-renderer-react-components";

export interface CugeCert extends Document {
  name: string;
  logo?: string;
  signatureD?: string;
  nameLine?: string;
  title?: string;
  remarks?: string;
  titleColor?: string;
  backgroundColor?: string;
  remarksColor?: string;
  //creditNum?: string;
  //issueDate?: string; 
  //partialShipments?: string;
  //transhipment?: string;
  certName?: string;
  issueDate?: string
  field1?: string;
  field2?: string;
  field3?: string;
  field4?: string;
  text1?: string;
  text2?: string; 
  text3?: string;
  text4?: string;
    links?: {
    self: {
      href: string;
    };
  };
}
