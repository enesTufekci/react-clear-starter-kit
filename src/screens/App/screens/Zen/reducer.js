/* @flow */
import axios from 'axios';
import { FETCHING_ZEN, UPDATE_ZENS } from './actionTypes';

export function fetchZen() {
  return (dispatch: Function) => {
    dispatch({
      type: FETCHING_ZEN,
      payload: true,
    });
    axios.get('https://api.github.com/zen')
      .then((zen) => {
        setTimeout(() => {
          dispatch({
            type: UPDATE_ZENS,
            payload: zen.data,
          });
          dispatch({
            type: FETCHING_ZEN,
            payload: false,
          });
        }, 1000);
      });
  };
}

function updateZens(state, action) {
  const zens = [action.payload, ...state.zens];
  const zen = action.payload;

  return { ...state, zens, zen };
}

const ACTION_HANDLERS = {
  [FETCHING_ZEN]: (state, action) => ({ ...state, fetching: action.payload }),
  [UPDATE_ZENS]: (state, action) => updateZens(state, action),
};

interface zenStateInterface {
  fetching: boolean;
  zens: Array<String>;
  zen: string;
}

const initialState: zenStateInterface = {
  fetching: false,
  zens: [],
  zen: '',
};

export const zenReducer = (
  state: zenStateInterface = initialState,
  action: { type: string, payload: any },
) => {
  const handler = ACTION_HANDLERS[action.type];

  return handler ? handler(state, action) : state;
};
