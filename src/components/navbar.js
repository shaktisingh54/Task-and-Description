import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
    state = {  }
    render() { 

        const look = {
            "marginbottom" : "0px"
        }
        

        return (
            <div>
                <div className = "jumbotron" style = {look}>
                    <h1>TASK FORM</h1>
                </div>
                <nav className = "navbar navbar-expand-md navbar-dark bg-dark">
                    <ul className = "navbar-nav">
                        <li className = "nav-item">
                            <Link to = "/" className = "nav-link"><h5>Task List</h5></Link>
                        </li>
                        <li className = "nav-item">
                            <Link to = "/add" className = "nav-link"><h5>Add Task</h5></Link>
                        </li>
                    </ul>
                </nav>
            </div>
         );
    }
}
 
export default Navbar;