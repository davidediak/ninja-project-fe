export interface ReducersStates {
  UI: UIState;
}

export interface MainUIState {
  disabled: boolean;
  fileUploaded: File;
  isI18nEnabled: boolean;
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
export const SWITCH_I18N = 'SWITCH_I18N';
export const DO_ENCRYPT = 'DO_ENCRYPT';
export const DO_DECRYPT = 'DO_DECRYPT';
export const DO_RESET = 'DO_RESET';

interface EnableButtonsActions {
  type: typeof ENABLE_BUTTONS;
  payload: MainUIState;
}

interface SwitchI18nActions {
  type: typeof SWITCH_I18N;
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
  | SwitchI18nActions
  | DoEncryptionActions
  | DoDecryptionActions
  | DoResetActions;
