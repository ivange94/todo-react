import React from 'react';

import AddTodoBox from './AddTodoBox';
import TodoTable from './TodoTable';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {todos: []};

    this.handleAdd = this.handleAdd.bind(this);
  }

  handleAdd(todo) {
    const todos = this.state.todos.slice();
    todos.push(todo);
    this.setState({todos: todos});
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <AddTodoBox title="Todos" onAdd={this.handleAdd}/>
          <TodoTable todos={this.state.todos}/>
        </div>
      </div>
    )
  }
}
export default App;
