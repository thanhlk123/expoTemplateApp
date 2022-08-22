import { SETTINGS } from 'actionsType';

const settingReducer = (state = { lang: '' }, action) => {
  switch (action.type) {
    case SETTINGS.CHANGE_LANGUAGE.HANDLER:
      return { ...state, lang: action.lang };

    default:
      return state;
  }
};

export default settingReducer;
