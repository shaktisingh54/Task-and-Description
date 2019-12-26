import React, { Component } from 'react';
import axios from 'axios';

class AddTask extends Component {

    constructor(props){
        super(props);
    
        this.onChangeTask = this.onChangeTask.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    
        this.state = {
          task: '',
          description: '',
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
    
        e.preventDefault();
        const here = {
          task: this.state.task,
          description: this.state.description
        }
    
        console.log(here)
    
        axios.post('http://localhost:5000/tasks/add', here)
        .then(res => console.log(res.data));

        window.location = '/';

      }

    render() { 
        return ( 
            <div>
              <h4>Add Task Here</h4>
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
                        <input type = "submit" value = "Add Task" className = "btn btn-primary"/>
                    </div>
                </form>
            </div>
         );
    }
}
 
export default AddTask;