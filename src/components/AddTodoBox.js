import React from 'react';

class AddTodoBox extends React.Component {
    constructor(props){
        super(props);
        this.handleKeyPress = this.handleKeyPress.bind(this);
    }

    handleKeyPress(e) {
        if (e.key === "Enter") {
            this.props.onAdd(e.target.value);
        }
    }

    render() {
        return (
            <div className="AddTodoBox text-center">
                <h1>{this.props.title}</h1>
                <input type="text" className="form-control" placeholder="Add Todo" onKeyPress={this.handleKeyPress}/>
            </div>
          );
    }
}

export default AddTodoBox;