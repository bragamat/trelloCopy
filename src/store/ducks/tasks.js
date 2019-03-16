import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* Types & Action Creators */

const { Types, Creators } = createActions({
  getTasksRequest: null,
  getTasksSuccess: ['task'],
  addList: null,
  addListSuccess: ['list'],
  addTaskToList: ['id', 'task'],
  addTaskToListSuccess: ['task'],
})

export const TasksTypes = Types
export default Creators

/* Initial State */

export const INITIAL_STATE = Immutable({
  data: [],
  tasks: [],
  lists: [
    { id: Math.random(), name: `First ${Math.random()}`, tasks: [
      { id:Math.random(), name: `Make Coffee ${Math.random()}`},
      { id:Math.random(), name: `Make Coffee ${Math.random()}`},
      { id:Math.random(), name: `Make Coffee ${Math.random()}`},
      { id:Math.random(), name: `Make Coffee ${Math.random()}`},
      { id:Math.random(), name: `Make Coffee ${Math.random()}`}]
    }
  ]
})

/* Reducers */
export const addList = (state, { list } ) => {
  return state.merge( { lists: [...state.lists, list] })
}

export const addTaskToList = (state, listId, task ) => {
  console.log(listId)
  return state.merge({ 
    lists: state.lists.map( list => (list.id === listId.id) ? { 
      ...list, tasks: [...list.tasks, listId.task]
    } : list )
  })
}


export const getSuccess = (state, { tasks }) => state.merge({ tasks })
export const openModal = (state) => state.merge({ teamModalOpen: true })
/* Reducers to types */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.GET_TASKS_SUCCESS]: getSuccess,
  [Types.ADD_LIST_SUCCESS]: addList,
  [Types.ADD_TASK_TO_LIST]: addTaskToList,
  // [Types.ADD_TASK_TO_LIST_SUCCESS]: addTaskToList,
})
