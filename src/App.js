import React, { Component } from 'react';

import Navigation from './components/Navigation';
import Header from './components/Header';
import TodoForm from './components/TodoForm';

class App extends Component {

  render() {
    return (
      <div className="container">
        {/*Component*/}
        <Header />
        <section>
          {/*Component*/}
          <Navigation />
          <h2>Todo Form</h2>
          {/*Component*/}
          <TodoForm />
        </section>
      </div>
    );
  }
}

export default App;
