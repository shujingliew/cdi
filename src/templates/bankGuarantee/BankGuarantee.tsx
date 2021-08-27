import { TemplateProps } from "@govtechsg/decentralized-renderer-react-components";
import React, { FunctionComponent } from "react";
import { DocumentQrCode } from "../../core/DocumentQrCode";
import { PrintWatermark } from "../../core/PrintWatermark";
import { BankGuarantee } from "./types";
import styled from "@emotion/styled";

const Container = styled.div`
  font-family: "Lucida Sans Unicode", "Lucida Grande", sans-serif;
  width: 100%;
  color: #4e4e50;
  min-height: 600px; // take note that logo image's height was never accounted in set iframe height, hence need a min-height in px, avoid using vh units

  .logo {
    max-width: 240px;
  }

  h1 {
    font-size: 32px;
  }
`;

export const BankGuaranteeTemplate: FunctionComponent<TemplateProps<BankGuarantee>> = ({ document }) => {
  const {
    backgroundColor,
    issueDate,
    effectiveDate,
    expiryDate,
    guaranteedAmount,
    vendorName,
    vendorAddress,
    vendorRef,
    beneficiaryName,
    beneficiaryAddress,
    guarantorName,
    guarantorAddress,
    guarantorRef,
    supportingDoc
  } = document;
  const qrCodeUrl = document?.links?.self.href;

  const borderStyle = {
    borderStyle: "solid",
    borderWidth: 1.5,
    borderColor: "black"
  };

  return (

    <div style={{ backgroundColor, borderStyle }} data-testid="bank-guarantee-template">
    <div style={borderStyle}>
    <Container className="p-4 mx-auto container">
        <PrintWatermark />

        <div className="grid grid-cols-1 gap-1">
          <div className="place-self-center">
            <img style={{ width: "150px" }} src="/static/images/quotation_icon.png" />
            <br />
            <br />
            <br />
          </div>
        </div>
        <div className="grid grid-cols-1 gap-1">
          <div className="place-self-center text-3xl">
            Bank Guarantee
            <br />
            <br />
          </div>
        </div>

        <div className="grid grid-cols-4 gap-3">
          <div className="font-bold">Issue Date:</div>
          <div>{issueDate}</div>
          <div className="font-bold">Effective Date:</div>
          <div>{effectiveDate}</div>
          <div className="font-bold">Expiry Date:</div>
          <div>{expiryDate}</div>
          <div className="font-bold">Guarantee Amount:</div>
          <div>{guaranteedAmount}</div>
          <div className="font-bold">Vendor Name:</div>
          <div>{vendorName}</div>
          <div className="font-bold">Vendor Address:</div>
          <div>{vendorAddress}</div>
          <div className="font-bold">Vendor Ref:</div>
          <div>{vendorRef}</div>
          <div/>
          <div/>
          <div className="font-bold">Beneficiary Name:</div>
          <div>{beneficiaryName}</div>
          <div className="font-bold">Beneficiary Address:</div>
          <div>{beneficiaryAddress}</div>
          <div className="font-bold">Guarantor Name:</div>
          <div>{guarantorName}</div>
          <div className="font-bold">Guarantor Address:</div>
          <div>{guarantorAddress}</div>
          <div className="font-bold">Guarantor Ref:</div>
          <div>{guarantorRef}</div>
          <div/>
          <div/>
        </div>

        {qrCodeUrl && <DocumentQrCode url={qrCodeUrl} />}
      </Container>
    </div>
    </div>
  );
};
