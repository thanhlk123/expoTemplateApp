import { SETTINGS } from 'actionsType';

export const changeLanguage = (lang) => {
  return {
    type: SETTINGS.CHANGE_LANGUAGE.HANDLER,
    lang,
  };
};
