import React from 'react';

import { Container, Lists, HeadButtons } from './styles';
import { connect } from 'react-redux'

import { bindActionCreators } from 'redux'
import TasksActions from '../../store/ducks/tasks'
import Task from '../Task'

import Button from '../../styles/components/Button'
const List = ({ lists, addTaskToList, deleteOneList }) => {
  return(
  <Container>
    {
      lists.map(item => (
        <Lists key={item.id}>
          <HeadButtons>
            <Button size='small' onClick={()=> addTaskToList(item.id, { id: Math.random(), name: '' } )}>
              Nova Tarefa
            </Button>
            <Button size='small' color="danger" onClick={()=> deleteOneList(item.id)}>
              Deletar Lista
            </Button>
          </HeadButtons> 
          <Task tasks={item.tasks} list={item}/>
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
