import React from 'react';
import "./AddButton.css";

export default class AddButton extends React.Component{

    constructor(props){
        super(props);

        this.state = {value: this.props.todoText};

        this.handleChange = this.handleChange.bind(this);
        this.addTodo = this.addTodo.bind(this);
    }

    handleChange(e){
        this.setState({value: e.target.value});
    }

    addTodo(todo){
        if(todo.length > 0){
            this.props.addTodo(todo);
            this.setState({value: ''});
        }
    }

    render(){
        return(
        <div>
            <div className="addButton" onClick={() => this.addTodo(this.state.value)}>+</div>
            <div className="addTextBox">
                <input type="text" placeholder="Add Your Task" value={this.state.value} onChange={this.handleChange}/>
            </div>
        </div>
        );
    }
}