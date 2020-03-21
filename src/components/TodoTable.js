import React from 'react';

import TodoItem from './TodoItem';


function TodoTable(props) {
    const todoItems = props.todos.map((todo) => 
        <li className="list-group-item"><TodoItem title={todo}/></li>   
    )
    return (
        <div className="TodoTable">
            <ul className="list-group">
                {todoItems}
            </ul>
        </div>
    )
}

export default TodoTable;