import React from 'react';
import styled from 'styled-components';
import filesWhiteIcon from '../assets/FilesWhite.svg';

const CustCard = styled.div`
  && {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    max-width: 552px;
    width: 100%;
    height: 120px;
    border: 1px solid #363636;
    box-sizing: border-box;
    border-radius: 3px;
    height: auto;
    & > * {
text-align: center;
    }
  }
`;
const StyledIconUploaded = styled.img`
  && {
    width: 38px;
    height: 44px;
    padding-top: 18px;
  }
`;

export default function CardPostFile({fileName}: {fileName: string}) {
  return (
    <CustCard>
      <StyledIconUploaded src={filesWhiteIcon} alt="files icon" />
      <p>{fileName}</p>
    </CustCard>
  );
}
