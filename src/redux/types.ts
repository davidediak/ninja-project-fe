export interface ReducersStates {
  UI: UIState;
}

export interface UIState {
  disabled: boolean;
  fileUploaded: File;
  encryption: {
    fileEncrypted: File;
    key: string;
  };
}
export const ENABLE_ENCRYPT_BUTTON = 'ENABLE_ENCRYPT_BUTTON';
export const DO_ENCRYPT = 'DO_ENCRYPT';
