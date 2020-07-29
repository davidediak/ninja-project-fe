import {ENABLE_ENCRYPT_BUTTON, DO_ENCRYPT, DO_DECRYPT, UIState, DO_RESET} from '../types';

const initialState: UIState = {
  disabled: true,
  fileUploaded: null,
  encryption: {
    fileEncrypted: null,
    key: null,
  },
  decryption: {
    fileToDecrypt: null,
    key: null,
  },
};

export default function (state = initialState, action: any) {
  switch (action.type) {
    case ENABLE_ENCRYPT_BUTTON:
      return {...state, disabled: false, fileUploaded: action.payload.fileUploaded};
    case DO_ENCRYPT:
      return {...state, encryption: action.payload.encryption};
      case DO_DECRYPT:
        return {...state, decryption: action.payload.decryption};
    case DO_RESET:
      return {...initialState};
    default:
      return state;
  }
}
