import {ENABLE_ENCRYPT_BUTTON, DO_ENCRYPT, UIState} from '../types';

const initialState: UIState = {
  disabled: true,
  fileUploaded: null,
  fileEncrypted: null,
};

export default function (state = initialState, action: any) {
  switch (action.type) {
    case ENABLE_ENCRYPT_BUTTON:
      return {...state, disabled: false, fileUploaded: action.payload.fileUploaded};
    case DO_ENCRYPT:
      return {...state, fileEncrypted: action.payload.fileEncrypted};
    default:
      return state;
  }
}
