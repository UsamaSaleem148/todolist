import React, {Component} from 'react';
import AddButton from "./myComponents/AddButton.jsx";
import './App.css';
import TodoItems from './myComponents/todoItems.jsx';

class App extends Component {

  constructor(props){
    super(props);


    this.state = {
      inputLinked: false
    }

    this.state = {
      todos: [
        {id: 0, text: "Make dinner tonight!"},
        {id: 1, text: "Fold the laundry."},
        {id: 2, text: "Learn to make a React app!"}
      ],
      nextId: 3
    }

    this.addTodo = this.addTodo.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  addTodo(todoText) {
    let todos = this.state.todos.slice();
    todos.push({id: this.state.nextId, text: todoText});
    this.setState({
      todos: todos,
      nextId: ++this.state.nextId
    });
  }

  removeTodo(id){
    this.setState({
      todos: this.state.todos.filter((todo, index) => todo.id !== id)
    });
  }


  handleClick() {
    this.setState({
      inputLinked: true
    })
  }

  componentDidMount() {
    var that = this;
    var date = new Date().getDate(); //Current Date
    var month = new Date().getMonth(); //Current Month
    var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var realMonth = monthNames[month];
    var year = new Date().getFullYear(); //Current Year
    that.setState({
      //Setting the value of the date time
      day: date,
      month: realMonth,
      year: year
    });
  }

  render(){
  return (
    <div className="app">
      <div className="main_wrapper">
        <div className="main_content">
          <div className="header">
          {/* <p><span><b>{this.state.month}</b></span>,&nbsp;{this.state.day}</p>
          <p>{this.state.year}</p> Z*/}
          <h3 className="heading">React ToDo List</h3>
          </div>
            <div className="rows">
            <AddButton todoText="" addTodo={this.addTodo}/>
            </div>

            <ul>
            {
              this.state.todos.map((todo) => {
                return <TodoItems todo={todo} key={todo.id} id={todo.id} removeTodo={this.removeTodo}/>
              })
            }
          </ul>
          <div className="footer">
            <p className="footerp">Made By Usama Saleem</p>
          </div>
        </div>
      </div>
    </div>
  );
  }
}

export default App;


// <div className="header">
//           <p><span><b>{this.state.month}</b></span>,&nbsp;{this.state.day}</p>
//           <p>{this.state.year}</p>
//           </div>
//             <div>

//               {this.state.inputLinked ?
//                 <input type="text"/>

//                 : <div></div>
//             }
            
//             </div>


// this.state = {
    //   day: '',
    //   month: '',
    //   year: ''
    // }