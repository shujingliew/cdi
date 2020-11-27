import { TemplateProps } from "@govtechsg/decentralized-renderer-react-components";
import React, { FunctionComponent } from "react";
import { DocumentQrCode } from "../../core/DocumentQrCode";
import { PrintWatermark } from "../../core/PrintWatermark";
import { LetterCredit } from "./types";
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

export const LetterCreditTemplate: FunctionComponent<TemplateProps<LetterCredit>> = ({ document }) => {
  const { logo, title, remarks, backgroundColor, titleColor, remarksColor, creditNum, issueDate, partialShipments, transhipment } = document;
  const qrCodeUrl = document?.links?.self.href;

  return (
    <div style={{ backgroundColor }} data-testid="letter-credit-template">
      <Container className="p-4 mx-auto container">
        <PrintWatermark />
        { logo && <img className="logo my-4" src={logo} />} 
        {title && (
          <h1 className="font-bold" style={{ color: titleColor }}>
            {title}
          </h1>
        )}
        {remarks && (
          <div className="my-4">
            <div
              className="font-bold"
              style={{
                color: remarksColor
              }}
            >
              Remarks:
            </div>
            <div
              style={{
                color: remarksColor
              }}
            >
              {remarks}
            </div>
          </div>
        )}
        {creditNum && (
          <div className="my-4">
            <div
              className="font-bold"
              style={{
                color: remarksColor
              }}
            >
              Documentary Credit Number:
            </div>
            <div
              style={{
                color: remarksColor
              }}
            >
              {creditNum}
            </div>
          </div>
        )}
        {issueDate && (
          <div className="my-4">
            <div
              className="font-bold"
              style={{
                color: remarksColor
              }}
            >
              Issue Date:
            </div>
            <div
              style={{
                color: remarksColor
              }}
            >
              {issueDate}
            </div>
          </div>
        )}
        {partialShipments && (
          <div className="my-4">
            <div
              className="font-bold"
              style={{
                color: remarksColor
              }}
            >
              Partial Shipments:
            </div>
            <div
              style={{
                color: remarksColor
              }}
            >
              {partialShipments}
            </div>
          </div>
        )}
        {transhipment && (
          <div className="my-4">
            <div
              className="font-bold"
              style={{
                color: remarksColor
              }}
            >
              Transhipment:
            </div>
            <div
              style={{
                color: remarksColor
              }}
            >
              {transhipment}
            </div>
          </div>
        )}
          {qrCodeUrl && <DocumentQrCode url={qrCodeUrl} />}
      </Container>
    </div>
  );
};


