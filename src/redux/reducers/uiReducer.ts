import {
  ENABLE_ENCRYPT_BUTTON
} from '../types';

const initialState = {
  disabled: true,
};

export default function(state = initialState, action: any) {
  switch (action.type) {
    case ENABLE_ENCRYPT_BUTTON:
      return { ...state, disabled: false };
    default:
      return state;
  }
}
