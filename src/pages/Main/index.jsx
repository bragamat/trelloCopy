import React, { Component } from 'react'
import api from '../../services/api'
// import TeamSwitcher from '../../components/TeamSwitcher'
import { Container, Header, Body, Title } from './styles'
import List from '../../components/List'
import Button from '../../styles/components/Button'

import TasksActions from '../../store/ducks/tasks'

import { connect } from 'react-redux'

import { bindActionCreators } from 'redux'

class Main extends Component {
  componentDidMount() {
    api.get('/teste')
  }
  
  render() {
    const { addList } = this.props
    return(
      <Container>
        <Header>
          <Title>
            Adicionar Lista    
          </Title>
          <Button onClick={()=> addList()}> + </Button>
        </Header>
        <Body>
          <List />
        </Body>
        
        {/* <TeamSwitcher /> */}
      </Container>
    )
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(TasksActions, dispatch);

// const mapStateToProps = state => ({
//   task: tasks
// });

export default connect(null, mapDispatchToProps)(Main)