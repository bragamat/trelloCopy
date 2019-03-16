import { actions as toastrActions } from 'react-redux-toastr'

import { call, put } from 'redux-saga/effects'

import api from '../../services/api'
import TeamsActions from '../ducks/teams'
export function* getTeams() {
  // const response = yield call(api.get, '/teams')

  const data = {
    data:[
      { id: 1, name: 'Mecanica+App', slug: 'mecanica-app'},
      { id: 2, name: 'Bramo+Tech', slug: 'bramo-tech'},
      { id: 3, name: 'Workable+Solution', slug: 'workable-solution'},
      { id: 4, name: 'ESM+INFO', slug: 'esm-info'},
    ]
  }
  yield put(TeamsActions.getTeamsSuccess(data.data))
}

export function* createTeam({ name }) {

  try {
    const response = yield call(api.post, '/teams', { name })
    yield put(TeamsActions.createTeamSuccess(response.data))
    yield put(TeamsActions.closeTeamModal())
  } catch (error) {
    yield put(toastrActions.add({
      type: 'error',
      title: 'Erro na operação',
      message: 'Houve um erro, tente novamente'
    }))
  }

}