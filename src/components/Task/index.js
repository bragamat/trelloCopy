import React from 'react';

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { TaskCard } from './styles';

import TasksActions from '../../store/ducks/tasks'

import Button from '../../styles/components/Button'

const Task = ({ tasks, list, editTaskTitle, deleteTaskFromList }) =>  (
  tasks.map(task => (
      <TaskCard key={task.id}>
        <input type="text" value={task.name} placehoder={task.name} onChange={(e) => editTaskTitle(list.id, task.id, e.target.value)} />
      <Button color="danger" onClick={() => deleteTaskFromList(list.id, task.id)} > - </Button>
      </TaskCard> 
    )
  )
)
const mapDispatchToProps = dispatch =>
  bindActionCreators(TasksActions, dispatch);
export default connect(null, mapDispatchToProps)(Task);
