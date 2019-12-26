import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
//import axios from 'axios';

import Navbar from "./components/navbar";
import TasksList from "./components/tasklist";
import AddTask from "./components/addtask";
import EditTask from "./components/edit";

class App extends Component {
  render() { 
    return ( 
      <Router>
        <div className = "container">
          <Navbar />
          <br/>
          <Route path = "/" exact component = {TasksList} />
          <Route path = "/add" component = {AddTask} />
          <Route path = "/edit/:id" component = {EditTask} />
        </div>
      </Router>
     );
  }
}
 
export default App;






























/*import Topbar from "./topbar.js";
import Add from "./add.js";

export default class App extends Component {
  constructor(props){
    super(props);

    this.onChangeTask = this.onChangeTask.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      task: '',
      description: '',
      given: []
    };
  }

  onChangeTask(e) {
    this.setState({
      task: e.target.value
    });
  }

  onChangeDescription(e) {
    this.setState({
      description: e.target.value
    });
  }

  onSubmit(e) {

    const here = {
      task: this.state.task,
      description: this.state.description
    }

    console.log(here)

    axios.post('http://localhost:5000/tasks/add', here)
    .then(res => console.log(res.data));
    
    this.setState({
      task: '',
      description: ''
    });
  }

  render() {
    return(
      <div className = "container">
      <Topbar />
      <form onSubmit = {this.onSubmit}>
        <div className = "form-group">
          <label>Task :</label>
          <input type = "text"
          required
          className = "form-control"
          value = {this.state.task}
          onChange = {this.onChangeTask}/>
        </div>
        <div className = "form-group">
          <label>Description :</label>
          <input type = "text"
          required 
          className = "form-control"
          value = {this.state.description}
          onChange = {this.onChangeDescription} />
        </div>
        <div className = "form-group">
          <input type = "submit" value = "Add" className = "btn btn-primary"/>
        </div>
      </form>
      <Add />
      </div>
    )
  }
}*/