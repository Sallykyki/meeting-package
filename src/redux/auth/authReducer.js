import {
  SIGN_UP_REQUEST,
  SIGN_UP_SUCCESS,
  SIGN_UP_ERROR,
  SIGN_IN_REQUEST,
  SIGN_IN_SUCCESS,
  SIGN_IN_ERROR,
  SIGN_OUT_REQUEST,
  SIGN_OUT_SUCCESS,
  SIGN_OUT_ERROR
} from "./authActions";

const authInitialState = {id: "", name: "", email: "", loading: false, error: ""};

const authReducer = (state = authInitialState, action) => {
  switch (action.type) {
    case SIGN_UP_REQUEST:
    case SIGN_IN_REQUEST:
    case SIGN_OUT_REQUEST:
      return {...state, loading: true, error: ""};

    case SIGN_UP_SUCCESS:
    case SIGN_IN_SUCCESS:
      const {id, name, email} = action.payload;
      return {...state, id, name, email, loading: false};
    case SIGN_OUT_SUCCESS:
      return authInitialState;

    case SIGN_UP_ERROR:
    case SIGN_IN_ERROR:
    case SIGN_OUT_ERROR:
      return {...state, loading: false, error: action.payload};

    default:
      return state;
  }
};

export default authReducer;
