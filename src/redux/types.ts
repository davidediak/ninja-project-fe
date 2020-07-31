export interface ReducersStates {
  UI: UIState;
}

interface MainUIState {
  disabled: boolean;
  fileUploaded: File;
}

interface EncryptionState {
  fileEncrypted: File;
  key: string;
}

interface DecryptionState {
  fileToDecrypt: File;
  key: string;
}
export interface UIState {
  mainUI: MainUIState;
  encryption: EncryptionState;
  decryption: DecryptionState;
}
export const ENABLE_BUTTONS = 'ENABLE_BUTTONS';
export const DO_ENCRYPT = 'DO_ENCRYPT';
export const DO_DECRYPT = 'DO_DECRYPT';
export const DO_RESET = 'DO_RESET';

interface EnableButtonsActions {
  type: typeof ENABLE_BUTTONS;
  payload: MainUIState;
}

interface DoEncryptionActions {
  type: typeof DO_ENCRYPT;
  payload: EncryptionState;
}

interface DoDecryptionActions {
  type: typeof DO_DECRYPT;
  payload: DecryptionState;
}

interface DoResetActions {
  type: typeof DO_RESET;
}

export type UiActionTypes =
  | EnableButtonsActions
  | DoEncryptionActions
  | DoDecryptionActions
  | DoResetActions;
