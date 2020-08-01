import {
  ENABLE_BUTTONS,
  DO_ENCRYPT,
  DO_DECRYPT,
  UIState,
  DO_RESET,
  UiActionTypes,
  SWITCH_I18N,
} from '../types';

const initialState: UIState = {
  mainUI: {
    disabled: true,
    fileUploaded: null,
    isI18nEnabled: false,
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
      return {
        ...state,
        mainUI: {...state.mainUI, disabled: false, fileUploaded: action.payload.fileUploaded},
      };
    case SWITCH_I18N:
      return {
        ...state,
        mainUI: {...state.mainUI, isI18nEnabled: action.payload.isI18nEnabled},
      };
    case DO_ENCRYPT:
      return {...state, encryption: action.payload};
    case DO_DECRYPT:
      return {...state, decryption: action.payload};
    case DO_RESET:
      return {
        ...initialState,
        mainUI: {...initialState.mainUI, isI18nEnabled: state.mainUI.isI18nEnabled},
      };
    default:
      return state;
  }
}
