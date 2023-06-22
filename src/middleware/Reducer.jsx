export const SETLOCATION_ADM = 'Reducer/SETLOCATION_ADM';
export const SET_INDEXLOC_ADM = 'Reducer/SET_INDEXLOC_ADM';
export const SET_SHOW_ADM = 'Reducer/SET_SHOW_ADM';

export const SET_SHOWTYPE_STR = 'Reducer/SET_SHOWTYPE_STR';
export const SET_SHOW_STR = 'Reducer/SET_SHOW_STR';

export const setLocationADM = (objectArray) => ({
  type: SETLOCATION_ADM,
  locationADM: objectArray
});

export const setIndexLocADM = (index) => ({
  type: SET_INDEXLOC_ADM,
  indexLocADM: index
});

export const setShowTypeSTR = (objectArray) => ({
  type: SET_SHOWTYPE_STR,
  showTypeSTR: objectArray
});

export const setShowADM = (boolean) => ({
  type: SET_SHOW_ADM,
  showADM: boolean
});

export const setShowSTR = (boolean) => ({
  type: SET_SHOW_STR,
  showSTR: boolean
});

const initialState = {
  locationADM: [],
  indexLocADM: null,
  showADM: true,
  showSTR: true,
  showTypeSTR: [true,true,true,true,true,true,true,true]
};

// Definisikan reducer
export default function Reducer(state = initialState, action) {
  switch (action.type) {
    case SETLOCATION_ADM:
      return {
        ...state,
        locationADM: action.locationADM
      };
    case SET_INDEXLOC_ADM:
      return {
        ...state,
        indexLocADM: action.indexLocADM
      };
    case SET_SHOW_ADM:
      return {
        ...state,
        showADM: action.showADM
      };
    case SET_SHOW_STR:
      return {
        ...state,
        showSTR: action.showSTR
      };
    case SET_SHOWTYPE_STR:
      return {
        ...state,
        showTypeSTR: action.showTypeSTR
      };
    default:
      return state;
  }
};

