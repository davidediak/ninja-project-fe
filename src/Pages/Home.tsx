import React, {Fragment} from 'react';
import DecryptButton from '../components/DecryptButton';
import Navbar from '../components/Navbar';
import InputDrop from '../components/InputDrop';
import EncryptButton from '../components/EncryptButton';
import {useSelector} from 'react-redux';
import {ReducersStates} from '../redux/types';
import PostEncryption from '../components/PostEncryption';
import PostDecryption from '../components/PostDecryption';
import {ButtonContainer} from '../components/styled-components';
import styled from 'styled-components';
import CardPostFile from '../components/CardPostFile';
import useTranslation from '../hooks/useTranslation';
const CustSection = styled.section`
  && {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-bottom: calc(56px - 1em);
  }
`;

const CustH2 = styled.h2`
  && {
    margin-top: 0px;
    font-weight: 900;
    font-size: 36px;
    line-height: 47px;
  }
`;

const CustP = styled.p`
  && {
    max-width: 552px;
    text-align: center;
  }
`;

const CustFooter = styled.div`
  && {
    font-size: 14px;
    line-height: 23px;
    text-align: center;
    color: #98A0A6;
    width: 100%;
    position: fixed;
    bottom: 24px;
  }
`;
export default function Home() {
  const {fileEncrypted} = useSelector<ReducersStates, {fileEncrypted: File}>(
    state => state.UI.encryption
  );

  const {fileToDecrypt} = useSelector<ReducersStates, {fileToDecrypt: File}>(
    state => state.UI.decryption
  );
  const t = useTranslation();

  return (
    <div>
      <Navbar />
      <CustSection>
        <CustH2>{t(`U)tt{(2w"u&-$(#&`)}</CustH2>
        {!fileEncrypted && !fileToDecrypt ? (
          <CustP>
            {t(`Sv*s"uwv2#" {"w2x{ w2w"u&-$({#"2s"v2vwu&-$({#"@2ewu)&w2s"-2x{ w2(-$w2s"v2!s{"(s{"2-#)&2$&{*su-3`)}
          </CustP>
        ) : (
          <CardPostFile fileName={fileEncrypted?.name ?? fileToDecrypt?.name} />
        )}
      </CustSection>
      {!fileEncrypted && !fileToDecrypt && (
        <Fragment>
          <InputDrop />
          <ButtonContainer>
            <EncryptButton />
            <DecryptButton />
          </ButtonContainer>
        </Fragment>
      )}
      {fileEncrypted && <PostEncryption />}
      {fileToDecrypt && <PostDecryption />}
      <CustFooter>
        {t(`fzw2+z# w2{'2"w*w&2(zw2')!2#x2(zw2$s&('2?2{(2{'2y&ws(w&2#&2 w''w&>2vw$w"v{"y2#"2z#+2+w  2(zw2{"v{*{v)s '2+#&}2(#yw(zw&`)}
      </CustFooter>
    </div>
  );
}
