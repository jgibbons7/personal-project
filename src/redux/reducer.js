const initialState = {
  username: '',
  profile_pic: '',
  userid: 0
}

const LOGIN_USER = 'LOGIN_USER'

export function loginUser(user) {
  return {
    type: LOGIN_USER,
    payload: user
  }
}

export function reducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN_USER:
      return {...state, ...action.payload}
    default:
      return initialState
  }
}