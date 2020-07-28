import React, {useState, Fragment} from 'react';
import Dropzone from 'react-dropzone';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import filesIcon from '../assets/Files.svg';

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

export default function InputDrop() {
  const handleDrop = (accptedFiles: File[]) => {
    setFileUploaded(accptedFiles[0]);
  };

  const handleUploadClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    console.info(`Uploaded `);
  };

  const [fileUploaded, setFileUploaded] = useState<File>(null);
  return (
    <Fragment>
      <Dropzone onDrop={handleDrop} multiple={false}>
        {({getRootProps, getInputProps}) => (
          <StyledSection>
            <StyledDropzoneContainer>
              <StyledInputContainer {...getRootProps()}>
                <input {...getInputProps()} />
                {!fileUploaded ? (
                  <Fragment>
                    <StyledButtonGroup variant="contained">
                      <StyledPrimaryButtonGroup>
                        <img src={filesIcon} alt="files icon" />
                        {`Uz##'w2x{ w3`}
                      </StyledPrimaryButtonGroup>
                      <Button size="small" onClick={handleUploadClick}>
                        <ArrowDropDownIcon />
                      </Button>
                    </StyledButtonGroup>
                  </Fragment>
                ) : (
                  fileUploaded?.name
                )}
              </StyledInputContainer>
            </StyledDropzoneContainer>
          </StyledSection>
        )}
      </Dropzone>
    </Fragment>
  );
}