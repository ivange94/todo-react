import React from 'react';

function AddTodoBox(props) {

    function handleKeyPress(e) {
        if (e.key === 'Enter') {
            props.onAdd(e.target.value);
            e.target.value = "";
        }
    }

    return (
        <div className="AddTodoBox text-center">
            <h1>{props.title}</h1>
            <input type="text" className="form-control" placeholder="Add Todo" onKeyPress={handleKeyPress}/>
        </div>
    )
}

export default AddTodoBox;