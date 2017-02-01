import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {TodoForm, TodoList} from './components/todo'

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      todos: [
        {id: 1, name: 'Learn JSX', isComplete: true},
        {id: 2, name: 'Build apps', isComplete: false},
        {id: 3, name: 'Get Jobs', isComplete: false}
      ],
      currentTodo: ''
    }
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(evt){
    this.setState({
      currentTodo: evt.target.value
    })
  }


  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Todo app</h2>
        </div>

        <div className="Todo-App">
            <TodoForm handleInputChange={this.handleInputChange} 
                currentTodo={this.state.currentTodo}/>
            <TodoList todos={this.state.todos}/>
        </div>   
      </div>
    );
  }
}


export default App;