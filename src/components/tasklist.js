import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Task = props => (
    <tr>
        <td>{props.task.task}</td>
        <td>
            <button className = "btn btn-primary" onClick = {() => {props.getTask(props.task._id)}}>Show</button>
        </td>
        <td>
            <Link to = {"/edit/" + props.task._id} className = "btn btn-primary">Edit</Link>
        </td>
        <td>
            <button className = "btn btn-danger" onClick = {() => {props.deleteTask(props.task._id)}}>Delete</button>
        </td>
    </tr>    
)

class TasksList extends Component {

    constructor(props) {
        super(props);

        this.deleteTask = this.deleteTask.bind(this);
        this.getTask = this.getTask.bind(this);
        

        this.state = {
            tasks: [],
            descriptions: []
        };

    }

    componentDidMount() {
        axios.get('http://localhost:5000/tasks/')
        .then(response => {
            this.setState({ tasks : response.data })
        })
        .catch((error) => {
            console.log('Error: ', error);
        })
    }

      deleteTask(id) {
        axios.delete('http://localhost:5000/tasks/' + id)
        .then(res => console.log(res.data));

        this.setState({
            tasks: this.state.tasks.filter(el => el._id !== id)
        })
      }

      getTask(id) {
        axios.get('http://localhost:5000/tasks/' + id)
        .then(response => {

            console.log(response.data)

            this.setState ({
                descriptions : response.data.description
            })
        })
      }

      taskList() {
          return this.state.tasks.map(currenttask => {
              return <Task task = {currenttask} deleteTask = { this.deleteTask } getTask = { this.getTask } key = {currenttask._id}/>;
          })
      }

    render() { 

        const { descriptions } = this.state;

            return ( 
                <div>
                <div className = "ex1">
                <table className = "table">
                    <thead className = "thead-light">
                        <tr>
                            <th>Name of task</th>
                            <th>Show Description</th>
                            <th>Edit Task</th>
                            <th>Delete task</th>
                        </tr>
                    </thead>
                    <tbody>
                        { this.taskList() }
                    </tbody>
                </table>
                </div>
                <div>
                    <hr></hr>
                    { descriptions }
                </div>
            </div>
         );
    }
}
 
export default TasksList;