import { TemplateProps } from "@govtechsg/decentralized-renderer-react-components";
import React, { FunctionComponent } from "react";
import { DocumentQrCode } from "../../core/DocumentQrCode";
import { PrintWatermark } from "../../core/PrintWatermark";
import { LetterCredit2 } from "./types";
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

export const LetterCredit2Template: FunctionComponent<TemplateProps<LetterCredit2>> = ({ document }) => {
  const {
    backgroundColor,
    sellerName,
    buyerName,
    goodsDesc,
    quantity,
    price,
    portOfLoading,
    portOfDestination
  } = document;
  const qrCodeUrl = document?.links?.self.href;

  return (
    <div style={{ backgroundColor }} data-testid="letter-credit2-template">
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
            Sales Contract Details
            <br />
            <br />
          </div>
        </div>

        <div className="grid grid-cols-4 gap-3">
          <div className="font-bold">Seller Name:</div>
          <div>{sellerName}</div>
          <div className="font-bold">Buyer Name:</div>
          <div>{buyerName}</div>
          <div className="font-bold">Goods Description:</div>
          <div>{goodsDesc}</div>
          <div className="font-bold">Quantity:</div>
          <div>{quantity}</div>
          <div className="font-bold">Price:</div>
          <div>{price}</div>
          <div />
          <div />
          <div className="font-bold">Port of Loading:</div>
          <div>{portOfLoading}</div>
          <div className="font-bold">Port of Destination:</div>
          <div>{portOfDestination}</div>
        </div>

        {qrCodeUrl && <DocumentQrCode url={qrCodeUrl} />}
      </Container>
    </div>
  );
};
