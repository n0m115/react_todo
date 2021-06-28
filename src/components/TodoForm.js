import React, { Component } from 'react';

import * as Api from '../Api';

class TodoForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      'title': '',
      'description': '',
      'errors': [],
      'success': ''
    }

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange = event => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    
    this.setState({
      [name]: value
    });
  }

  handleSubmit = event => {
    event.preventDefault();
    
    let errors = [];
    
    this.setState({
      success: ''
    });
    
    // title should have been required on API side, added on client side though
    if(this.state.title == "") {
      errors.push('Title Cannot be empty');
    }
    
    if(errors.length) {
      this.setState({
        errors
      });

      return false;
    }

    Api.addTodo(this.state)
    .then(res => {
      this.setState({
        title: '',
        description: '',
        success: `${res.title} added successfully`,
        errors: []
      });
    })
    .catch(error => {
      console.log(error);
      this.setState({
        success: ''
      });
    });
  }

  render() {
    return(
      <form onSubmit={this.handleSubmit}>
        {this.state.success ?
          <div className="alert alert-success" role="alert">
            {this.state.success}
            </div>
          : ''
        }
        {this.state.errors.map((error, index) => (
          <div key={error} className="alert alert-danger" role="alert">
            {this.state.errors[index]}
          </div>
        ))}
        <div className="row">
          <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="title">Title</label>
              <input 
                type="text" 
                className="form-control" 
                name="title" 
                value={this.state.title} 
                style={{"borderColor" : (this.state.errors.title) ? "#f00" : "#ced4da"}}
                onChange={this.handleInputChange}
                />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="description">Description</label>
              <input 
                type="text" 
                className="form-control" 
                name="description" 
                value={this.state.description} 
                onChange={this.handleInputChange}
                />
            </div>
          </div>
        </div>
        <input type="submit" className="btn btn-dark" value="Submit"/>
      </form>
    );
  }
}

export default TodoForm;