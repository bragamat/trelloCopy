import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

/* Types & Action Creators */

const { Types, Creators } = createActions({
  signInRequest: ['email', 'password'],
  signInSuccess: ['token'],
  signOut: null
});

export const AuthTypes = Types;
export default Creators;

/* Initial State */

export const INITIAL_STATE = Immutable({
  signedIn: !!localStorage.getItem('@authToken'),
  token: localStorage.getItem('@authToken') || null,
});

/* Reducers */

export const success = (state, { token }) =>{
  // console.log(token)
  return state.merge({ signedIn: true, token });
}

export const logOut = state => state.merge({ signedIn: false, token: null })
/* Reducers to types */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.SIGN_IN_SUCCESS]: success,
  [Types.SIGN_OUT]: logOut
});
