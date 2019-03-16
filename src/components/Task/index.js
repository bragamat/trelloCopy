import React from 'react';

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { TaskCard } from './styles';

import TasksActions from '../../store/ducks/tasks'

const Task = ({ tasks, list, editTaskTitle }) =>  (
  tasks.map(task => (
      <TaskCard key={task.id}>
        <input type="text" value={task.name} placehoder={task.name} onChange={(e) => editTaskTitle(list.id, task.id, e.target.value)} />
      </TaskCard> 
    )
  )
)
const mapDispatchToProps = dispatch =>
  bindActionCreators(TasksActions, dispatch);
export default connect(null, TasksActions)(Task);
