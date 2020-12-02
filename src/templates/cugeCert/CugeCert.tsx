import { TemplateProps } from "@govtechsg/decentralized-renderer-react-components";
import React, { FunctionComponent } from "react";
import { DocumentQrCode } from "../../core/DocumentQrCode";
import { PrintWatermark } from "../../core/PrintWatermark";
import { CugeCertI } from "./types";
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

export const CugeCertTemplate: FunctionComponent<TemplateProps<CugeCertI>> = ({ document }) => {
  const { logo, title, backgroundColor, titleColor, issueDate, signatureD, text1, text2, text3, field1 } = document;
  const qrCodeUrl = document?.links?.self.href;

  return (
    <div style={{ backgroundColor }} data-testid="cuge-cert-template">
      <Container className="p-4 mx-auto container">
        <PrintWatermark />

        <div className="grid grid-cols-1 gap-1">
          <div className="place-self-center">{logo && <img className="logo my-4" src={logo} />}</div>
        </div>

        <div className="grid grid-cols-1 gap-1">
          <div className="place-self-center">
            {title && (
              <h1 className="font-bold" style={{ color: titleColor }}>
                Certificate in Therapeutic Horticulture
              </h1>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 gap-2">
          <div />
          <div className="place-self-center">
            {text1 && (
              <h2 className="font" style={{ color: titleColor }}>
                This is to certify that
              </h2>
            )}
          </div>
        </div>
        <div className="grid grid-cols-1 gap-2">
          <div />
          <div className="place-self-center">
            <h1 className="font" style={{ color: titleColor }}>
              <p className="underline">{field1}</p>
            </h1>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-3">
          <div />
          <div className="place-self-center">
            {text2 && (
              <h2 className="font" style={{ color: titleColor }}>
                has successfully completed the programme and assessment
              </h2>
            )}
          </div>
          <div />
        </div>

        <div className="grid grid-cols-1 gap-3">
          <div />
          <div className="place-self-center">
            {text3 && (
              <h2 className="font" style={{ color: titleColor }}>
                Date of Issue: {issueDate}
              </h2>
            )}
            <p />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-1">
          <div className="place-self-center">{signatureD && <img className="logo my-4" src={signatureD} />}</div>
        </div>

        <div className="grid grid-cols-1 gap-4  place-self-center">
          <div className="place-self-center .. text-xs">Sim Cheng Hai</div>
          <div className="place-self-center text-xs">Group Director</div>
          <div className="place-self-center text-xs">Centre for Urban Greenery and Ecology</div>
          <div className="place-self-center .. text-xs">National Parks Board</div>
        </div>

        {qrCodeUrl && <DocumentQrCode url={qrCodeUrl} />}
      </Container>
    </div>
  );
};
