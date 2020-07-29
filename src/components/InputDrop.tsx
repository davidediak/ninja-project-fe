import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import React, {Fragment, useState} from 'react';
import Dropzone from 'react-dropzone';
import {useDispatch} from 'react-redux';
import styled from 'styled-components';
import filesIcon from '../assets/Files.svg';
import {ENABLE_ENCRYPT_BUTTON} from '../redux/types';

const StyledSection = styled.section`
  && {
    display: flex;
    justify-content: center;
  }
`;
const StyledDropzoneContainer = styled.div`
  && {
    max-width: 936px;
    width: 936px;
    height: 216px;
    background: #ffa047;
    padding: 8px;
  }
`;
const StyledInputContainer = styled.div`
  && {
    background: rgba(22, 22, 22, 0.16);
    border: 1px dashed #363636;
    box-sizing: border-box;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
const StyledButtonGroup = styled(ButtonGroup)`
  && {
    max-width: 264px;
    height: 48px;
  }
`;
const StyledPrimaryButtonGroup = styled(Button)`
  && {
    width: 264px;
  }
`;

const StyledIcon = styled.img`
  && {
    margin-right: 26px;
  }
`;

const StyledDropText = styled.div`
  && {
    text-align: center;
    padding-top: 20px;
    color: #161616;
  }
`;

const UploadedDiv = styled.div`
  && {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const StyledIconUploaded = styled.img`
  && {
    width: 38px;
    height: 44px;
  }
`;

export default function InputDrop() {
  const dispatch = useDispatch();
  const [fileUploaded, setFileUploaded] = useState<File>(null);

  const handleDrop = (accptedFiles: File[]) => {
    const fileUploaded = accptedFiles[0];
    if (fileUploaded) {
      setFileUploaded(fileUploaded);
      dispatch({type: ENABLE_ENCRYPT_BUTTON, payload: {fileUploaded}});
    }
  };
  return (
    <Fragment>
      <Dropzone onDrop={handleDrop} multiple={false}>
        {({getRootProps, getInputProps}) => (
          <StyledSection>
            <StyledDropzoneContainer>
              <StyledInputContainer {...getRootProps()}>
                <input {...getInputProps()} />
                {
                  <Fragment>
                    {!fileUploaded ? (
                      <div>
                        <StyledButtonGroup variant="contained">
                          <StyledPrimaryButtonGroup>
                            <StyledIcon src={filesIcon} alt="files icon" />
                            {`Uz##'w2x{ w3`}
                          </StyledPrimaryButtonGroup>
                          <Button size="small">
                            <ArrowDropDownIcon />
                          </Button>
                        </StyledButtonGroup>
                        <StyledDropText>
                          <span>or drop files here</span>
                        </StyledDropText>
                      </div>
                    ) : (
                      <UploadedDiv>
                        <StyledIconUploaded src={filesIcon} alt="files icon" />
                        <StyledDropText>
                          <span>{fileUploaded?.name}</span>
                        </StyledDropText>
                      </UploadedDiv>
                    )}
                  </Fragment>
                }
              </StyledInputContainer>
            </StyledDropzoneContainer>
          </StyledSection>
        )}
      </Dropzone>
    </Fragment>
  );
}
