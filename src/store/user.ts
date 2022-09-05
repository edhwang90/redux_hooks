import { PayloadAction } from '@reduxjs/toolkit';
import { AppState } from '../lib/types';

type userState = {
  fullName:string,
  loggedIn:boolean
}

// ignoring rates
type StateType = {
  user: userState
}

const initialState = {
  fullName: 'Jamund Fergusson',
  loggedIn: false
}

export const userReducer = (state = initialState, action:PayloadAction) => {
  return state;
}

//selectors (single location for changes / an api)
export const getName = (state:StateType) => (state.user.fullName);