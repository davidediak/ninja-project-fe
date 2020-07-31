import {ENABLE_BUTTONS, DO_ENCRYPT, DO_DECRYPT, UIState, DO_RESET, UiActionTypes} from '../types';

const initialState: UIState = {
  mainUI: {
    disabled: true,
    fileUploaded: null,
  },
  encryption: {
    fileEncrypted: null,
    key: null,
  },
  decryption: {
    fileToDecrypt: null,
    key: null,
  },
};

export default function (state = initialState, action: UiActionTypes): UIState {
  switch (action.type) {
    case ENABLE_BUTTONS:
      return {...state, mainUI: {disabled: false, fileUploaded: action.payload.fileUploaded}};
    case DO_ENCRYPT:
      return {...state, encryption: action.payload};
    case DO_DECRYPT:
      return {...state, decryption: action.payload};
    case DO_RESET:
      return {...initialState};
    default:
      return state;
  }
}
