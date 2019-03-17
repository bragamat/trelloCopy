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
  editTaskTitle: ['list_id', 'task_id', 'title'],
  deleteOneList: ['id'],
  deleteTaskFromList: ['list_id', 'task_id']
})

export const TasksTypes = Types
export default Creators

/* Initial State */

export const INITIAL_STATE = Immutable({
  data: [],
  tasks: [],
  lists: []
})

/* Reducers */
export const addList = (state, { list } ) => {
  return state.merge( { lists: [...state.lists, list] })
}

export const addTaskToList = (state, listId, task ) => {
  return state.merge({ 
    lists: state.lists.map( list => (list.id === listId.id) ? { 
      ...list, tasks: [...list.tasks, listId.task]
    } : list )
  })
}

export const editTaskTitle = (state, listId, task_id, title ) => {
  
  return state.merge({ 
    lists: state.lists.map( list => (list.id === listId.list_id) ? { 
      ...list, tasks: list.tasks.map(
        task => (task.id === listId.task_id ? { id: listId.task_id, name: `${listId.title}` }
          : task)
      )
    } : list )
  })
}

export const deleteOneList = (state, listId ) => {
  return state.merge({ 
    lists: state.lists.filter(list => list.id !== listId.id)
  })
}

export const deleteTaskFromList = (state, listId, task_id, title ) => {
  return state.merge({ 
    lists: state.lists.map( list => (list.id === listId.list_id) ? { 
      ...list, tasks: list.tasks.filter(
        task => task.id !== listId.task_id
      )
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
  [Types.EDIT_TASK_TITLE]: editTaskTitle,
  [Types.DELETE_ONE_LIST]: deleteOneList,
  [Types.DELETE_TASK_FROM_LIST]: deleteTaskFromList,
})
