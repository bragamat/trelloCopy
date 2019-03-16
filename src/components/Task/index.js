import React from 'react';

import { TaskCard } from './styles';

const Task = ({ tasks }) =>  (
  tasks.map(task => (
      <TaskCard key={task.id} onClick={()=> console.log('editar titulo')}>{task.name}</TaskCard> 
    )
  )
)
export default Task;
