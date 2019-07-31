import {FETCH_PROJECTS} from '../actions/types';
export default function projects(state = [], action) {
    switch (action.type) {
        case FETCH_PROJECTS:
        return action.data;
      default:
        return state;
    }
  }