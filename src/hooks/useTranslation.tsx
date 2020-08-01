import {ReducersStates} from '../redux/types';
import {useSelector} from 'react-redux';
import {decryptCipher} from '../util/translator';

export default function useTranslation(): (label: string) => string {
  const isI18nEnabled = useSelector<ReducersStates, boolean>(
    state => state.UI.mainUI.isI18nEnabled
  );
  if (isI18nEnabled) return label => decryptCipher(label);
  return label => label;
}
