import {ENABLE_ENCRYPT_BUTTON} from '../types';

const initialState = {
  disabled: true,
  fileUploaded: File,
};

export default function (state = initialState, action: any) {
  switch (action.type) {
    case ENABLE_ENCRYPT_BUTTON:
      return {...state, disabled: false, fileUploaded: action.payload.fileUploaded};
    default:
      return state;
  }
}
