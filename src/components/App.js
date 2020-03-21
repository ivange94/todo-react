import React from 'react';

import TodoHeader from './TodoHeader';
import AddTodoBox from './AddTodoBox';
import TodoTable from './TodoTable';
import TodoItem from './TodoItem';

function App() {
  return (
    <div className="App">
      <TodoHeader />
      <AddTodoBox />
      <TodoTable />
      <TodoItem />
    </div>
  );
}

export default App;
