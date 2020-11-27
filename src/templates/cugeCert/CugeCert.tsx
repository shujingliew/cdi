import { TemplateProps } from "@govtechsg/decentralized-renderer-react-components";
import React, { FunctionComponent } from "react";
import { DocumentQrCode } from "../../core/DocumentQrCode";
import { PrintWatermark } from "../../core/PrintWatermark";
import { CugeCert } from "./types";
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

export const CugeCertTemplate: FunctionComponent<TemplateProps<CugeCert>> = ({ document }) => {
  const { logo, title, remarks, backgroundColor, titleColor, remarksColor, issueDate,  certName, nameLine, signatureD, text1, text2, text3, text4, field1, field2, field3, field4 } = document;
  const qrCodeUrl = document?.links?.self.href;

  return (
    <div style={{ backgroundColor }} data-testid="cuge-cert-template">
      <Container className="p-4 mx-auto container">
        <PrintWatermark />
        
  
  <div class="grid grid-cols-1 gap-1 ...">
    <div class="place-self-center ...">{logo && <img className="logo my-4" src={logo} />}
    </div>
  </div>

  <div class="grid grid-cols-1 gap-1 ...">
    <div class="place-self-center ...">
    {title && (
          <h1 className="font-bold" style={{ color: titleColor }}>
            Certificate in Therapeutic Horticulture
          </h1>
    )}
    </div>
  </div>

 
  <div class="grid grid-cols-1 gap-4 ...">
    <div></div>
    <div class="place-self-center ...">
    {text1 && (
          <h2 className="font" style={{ color: titleColor }}>
            This is to certify that
          </h2>
    )}
    </div>
    <div class="place-self-center ...">
          <h1 className="font" style={{ color: titleColor}}>
            <p class="underline ...">{field1}</p>
          </h1>  
    </div>
   </div>

  <div class="grid grid-cols-1 gap-3 ...">
    <div></div>
    <div class="place-self-center ...">
    {text2 && (
          <h2 className="font" style={{ color: titleColor }}>
            has successfully completed the programme and assessment
          </h2>
    )}
    </div>
    <div></div>
  </div>

  <div class="grid grid-cols-1 gap-3 ...">
    <div></div>
    <div class="place-self-center ...">
    {text3 && (
          <h2 className="font" style={{ color: titleColor }}>
            Date of Issue: {issueDate}
            
          </h2>
    )}
    <p></p>
    </div>
  </div>

  <div class="grid grid-cols-1 gap-1 ...">
    <div class="place-self-center ...">{signatureD && <img className="logo my-4" src={signatureD} />}
    </div>
  </div>

  <div class="grid grid-cols-1 gap-4  place-self-center">
    <div class="place-self-center .. text-xs">Sim Cheng Hai</div> 
    <div class="place-self-center text-xs">Group Director</div>
    <div class="place-self-center text-xs">Centre for Urban Greenery and Ecology</div>
    <div class="place-self-center .. text-xs">National Parks Board</div>
  </div>

  
        
          {qrCodeUrl && <DocumentQrCode url={qrCodeUrl} />}
      </Container>
    </div>
  );
};


