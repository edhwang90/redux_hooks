const initialState = {
  fullName: 'Jamund Fergusson',
  loggedIn: false
}

export const userReducer = (state = initialState, action) => {
  return state;
}

//selectors (single location for changes / an api)
export const getName = (state) => state.user.fullName;