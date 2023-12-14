const initialState = {
  isLoggedIn: false,
  username: '',
  password: '', // Add password to the initial state
  error: '',
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        isLoggedIn: true,
        username: action.payload,
        password: 'mcknight', // Set the password when logging in
        error: '',
      };
    case 'LOGOUT':
      return initialState;
    case 'SET_ERROR':
      return {
        ...state,
        error: action.payload,
      };
    case 'CLEAR_ERROR':
      return {
        ...state,
        error: '',
      };
    case 'SET_USERNAME':
      return {
        ...state,
        username: action.payload,
      };
    case 'SET_PASSWORD':
      return {
        ...state,
        password: action.payload,
      };
    default:
      return state;
  }
};

export default authReducer;
