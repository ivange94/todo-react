import React from 'react';

import TodoItem from './TodoItem';

function TodoTable(props) {
    const todoItems = props.todos.map((todo, index) => 
        <li 
            key={index}
            className="list-group-item">
                <TodoItem 
                    title={todo}
                    index={index}
                    onDelete={() => props.onDelete(index)}/>
        </li>   
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