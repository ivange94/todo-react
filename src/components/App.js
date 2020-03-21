import React from 'react';

import AddTodoBox from './AddTodoBox';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {todos: []};

    this.handleAdd = this.handleAdd.bind(this);
  }

  handleAdd(todo) {
    console.log(todo);
    this.state.todos.push(todo);
    console.log(this.state.todos);
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <AddTodoBox title="Todos" onAdd={this.handleAdd}/>
        </div>
      </div>
    )
  }
}
export default App;
