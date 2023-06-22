export const SETLOCATION_ADM = 'Reducer/SETLOCATION_ADM';
export const SET_INDEXLOC_ADM = 'Reducer/SET_INDEXLOC_ADM';
export const SET_SHOW_ADM = 'Reducer/SET_SHOW_ADM';

export const setLocationADM = (objectArray) => ({
  type: SETLOCATION_ADM,
  locationADM: objectArray
});

export const setIndexLocADM = (index) => ({
  type: SET_INDEXLOC_ADM,
  indexLocADM: index
});

export const setShowADM = (boolean) => ({
  type: SET_SHOW_ADM,
  showADM: boolean
});


const initialState = {
  locationADM: [],
  indexLocADM: null,
  showADM: true
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
    default:
      return state;
  }
};

