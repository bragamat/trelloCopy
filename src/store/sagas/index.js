import { all, takeLatest } from 'redux-saga/effects'

import { signIn, signOut } from './auth'
import { AuthTypes } from '../ducks/auth'

import { getTeams, createTeam } from './teams'
import { getTasks, addListItem } from './tasks'
import { TeamsTypes } from '../ducks/teams'
import { TasksTypes } from '../ducks/tasks'

export default function* rootSaga() {
  return yield all([
    takeLatest(AuthTypes.SIGN_IN_REQUEST, signIn),
    takeLatest(AuthTypes.SIGN_OUT, signOut),
 
    takeLatest(TasksTypes.GET_TASKS_REQUEST, getTasks),
    takeLatest(TasksTypes.ADD_LIST, addListItem),
 
    takeLatest(TeamsTypes.GET_TEAMS_REQUEST, getTeams),
    takeLatest(TeamsTypes.CREATE_TEAM_REQUEST, createTeam),
  ])
}