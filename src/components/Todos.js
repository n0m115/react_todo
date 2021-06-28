import React, { Component } from 'react';

import * as Api from '../Api';

import Navigation from './Navigation';
import Header from './Header';

class Todos extends Component {
	
	constructor(props) {
		super(props);

		this.state = {
      'todos': []
    };
  }

  setTodos = () => {
    Api.getTodos()
    .then(todos => {
      
      this.setState({
        todos
      });
    })
    .catch(error => {
      console.log(error);
    });
  }

  componentDidMount() {
    this.setTodos();
  }

  render() {

    return (
      <div className="container">
        <Header />
        <section>
          <Navigation />
          <h2>Todo List</h2>
          <table className="table">
            <thead className="thead-dark">
              <tr>
              <th scope="col">ID</th>
              <th scope="col">Title</th>
              <th scope="col">Description</th>
              </tr>
            </thead>
            <tbody>
              {this.state.todos.map(todo => (
                <tr key={todo.id}>
                <td>{todo.id}</td>
                <td>{todo.title}</td>
                <td>{todo.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </div>
  )
};
}

export default Todos;