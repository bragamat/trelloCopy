import { call, put } from 'redux-saga/effects'
import { push } from 'connected-react-router'

import api from '../../services/api'
import { actions as toastrActions } from 'react-redux-toastr'
import AuthActions from '../ducks/auth'

export function* signIn ({ email, password }) {
  
  try {
    // const response = yield call(api.post, 'sessions', { email, password })
    const token = 'Bearer 178G2B3N1J29038H97G819H2'
    
    localStorage.setItem('@authToken', token)

    yield put(AuthActions.signInSuccess(token))
    yield put(push('/'))
  } catch (error) {
    yield put(toastrActions.add({
      type: 'error',
      title: 'Falha no login',
      message: 'Verifique seu e-mail ou senha'
    }))
    console.log(error)

  }
}

export function* signOut() {
  localStorage.removeItem('@authToken')
  localStorage.removeItem('@activeTeam')

  yield put(push('/signin'))
}