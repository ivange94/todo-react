import React from 'react';

function TodoItem(props) {
    return (
        <div className="card">
            <div className="card-body">
                <span>{props.title}</span><button className="btn btn-danger float-right">Delete</button>
            </div>
        </div>
    );
}

export default TodoItem;