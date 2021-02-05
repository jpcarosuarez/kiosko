import * as ActionTypes from "./actionsTypes";
import firebase from "../../../db/index";

const requestLogin = () => {
  return {
    type: ActionTypes.LOGIN_REQUEST
  };
};

const receiveLogin = user => {
  return {
    type: ActionTypes.LOGIN_SUCCESS,
    user
  };
};

const loginError = () => {
  return {
    type: ActionTypes.LOGIN_FAILURE
  };
};

const requestLogout = () => {
  return {
    type: ActionTypes.LOGOUT_REQUEST
  };
};

const receiveLogout = () => {
  return {
    type: ActionTypes.LOGOUT_SUCCESS
  };
};

const logoutError = () => {
  return {
    type: ActionTypes.LOGOUT_FAILURE
  };
};

const verifyRequest = () => {
  return {
    type: ActionTypes.VERIFY_REQUEST
  };
};

const verifySuccess = () => {
  return {
    type: ActionTypes.VERIFY_SUCCESS
  };
};

export const loginUser = (email, password) => dispatch => {
  dispatch(requestLogin());

  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then(() => dispatch(receiveLogin()))
    .catch(() => dispatch(loginError()));
};

export const logoutUser = () => dispatch => {
  dispatch(requestLogout());

  firebase
    .auth()
    .signOut()
    .then(() => dispatch(receiveLogout()))
    .catch(() => dispatch(logoutError()));
};

export const verifyAuth = () => dispatch => {
  dispatch(verifyRequest());

  firebase.auth().onAuthStateChanged(user => {
    if (user !== null) {
      dispatch(receiveLogin());
    }

    dispatch(verifySuccess());
  });
};
