import React from 'react';
import "./todoItems.css";

export default class TodoItems extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            isCheckeds: false
        }

        this.isChecked = this.isChecked.bind(this);
    }

    

    isChecked() {
        this.setState({
            isCheckeds: !this.state.isCheckeds
        })
      }

    removeTodo(id){
        this.props.removeTodo(id);
    }

    render(){
        return(
            <div className="row">
                <input type="checkbox" onClick={this.isChecked}/>
                <p className={this.state.isCheckeds? "isChecked": ""}>{this.props.todo.text}</p>
                <button className="removeTodo" onClick={(e) => this.removeTodo(this.props.id)}><b>X</b></button>
            </div>
        );
    }
}