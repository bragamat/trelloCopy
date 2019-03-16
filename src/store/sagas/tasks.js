import { actions as toastrActions } from 'react-redux-toastr'

import { call, put } from 'redux-saga/effects'

import api from '../../services/api'
import TasksActions from '../ducks/tasks'
export function* getTasks() {
  // const response = yield call(api.get, '/teams')

  const task = {
    task:[
      { id: 1, name: 'Mecanica+App', slug: 'mecanica-app'},
      { id: 2, name: 'Bramo+Tech', slug: 'bramo-tech'},
      { id: 3, name: 'Workable+Solution', slug: 'workable-solution'},
      { id: 4, name: 'ESM+INFO', slug: 'esm-info'},
    ]
  }
  yield put(TasksActions.getTasksSuccess(task.task))
}

export function* createTask({ name }) {

  try {
    const response = yield call(api.post, '/teams', { name })
    yield put(TasksActions.createTasksuccess(response.data))
    yield put(TasksActions.closeTeamModal())
  } catch (error) {
    yield put(toastrActions.add({
      type: 'error',
      title: 'Erro na operação',
      message: 'Houve um erro, tente novamente'
    }))
  }

}


export function* addListItem() {
  const lists = { id: Math.random(), name: `First ${Math.random()}`, tasks: []}

  yield put(TasksActions.addListSuccess(lists))
}


export function* addTaskToList(id) {
  
  // const list  = lists.map(list => {
  //   return list.id !== id
  // })
  // const lists = { id: Math.random(), name: `First ${Math.random()}`, tasks: [] }

  // yield put(TasksActions.addListSuccess(lists))
}

