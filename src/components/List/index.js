import React from 'react';

import { Container, Lists } from './styles';
import { connect } from 'react-redux'

import { bindActionCreators } from 'redux'
import TasksActions from '../../store/ducks/tasks'
import Task from '../Task'

import Button from '../../styles/components/Button'
const List = ({ lists, addTaskToList }) => {
  return(<Container>
    {
      lists.map(item => (
        <Lists key={item.id}>
          <Task tasks={item.tasks}/>
          <Button size='small' onClick={()=> addTaskToList(item.id, { id: Math.random(), name: `Title:` } )}>
            Nova Tarefa
          </Button>
        </Lists>
        ))
    }
    
  </Container>)
}

const mapStateToProps = state => ({
  lists: state.lists.lists
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(TasksActions, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(List);
