import React, { Component } from 'react';
import axios from 'axios';

class EditTask extends Component {

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

      componentDidMount() {
          console.log(this.props.match.params.id);
        axios.get('http://localhost:5000/tasks/' + this.props.match.params.id)
        .then(response => {
            this.setState({ 
                task : response.data.task,
                description : response.data.description
             })
        })
        .catch((error) => {
            console.log('Error: ', error);
        })
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
    
        axios.post('http://localhost:5000/tasks/update/' + this.props.match.params.id, here)
        .then(res => console.log(res.data));
        

        window.location = '/';

      }

    render() { 
        return ( 
            <div>
                <h4>Edit Task Here</h4>
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
                        <input type = "submit" value = "Edit Task" className = "btn btn-primary"/>
                    </div>
                </form>
            </div>
         );
    }
}
 
export default EditTask;