import React, { useState } from 'react';

import AddTodoBox from './AddTodoBox';
import TodoTable from './TodoTable';

function App(props) {
  const [todos, setTodos] = useState([])

  function handleAdd(todo) {
    const todos_new = todos.slice();
    todos_new.push(todo);
    setTodos(todos_new)
  }

  function handleDelete(index) {
    const todos_new = todos.slice();
    todos_new.splice(index, 1);
    setTodos(todos_new);
  }

  return (
    <div className="App">
      <div className="container">
        <AddTodoBox title="Todos" onAdd={handleAdd}/>
        <TodoTable 
          todos={todos}
          onDelete={handleDelete}/>
      </div>
    </div>
  )
}
export default App;
