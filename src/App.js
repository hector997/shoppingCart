import React, { Component } from 'react';
import NavBar from './components/navbar';
import './App.css';
import Counters from './components/counters';
import { render } from '@testing-library/react';

class App extends Component {
  state = {  
      counters: [
          {id: 1, value: 0},
          {id: 2, value: 0},
          {id: 3, value: 0},
          {id: 4, value: 0},
  ]
  };

  handleIncrement = (counter) => {
      const counters = [...this.state.counters];
      const index = counters.indexOf(counter);
      counters[index] = {...counter };
      counters[index].value++;
      this.setState({counters});
  };
  handleDecrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    if (counters[index].value > 0){
      counters[index] = {...counter };
      counters[index].value--;
      this.setState({counters});
      } else{ 
        alert("don't");
    };
  };

  handleDelete = (counterId) => {
      const counters = this.state.counters.filter(c => c.id !== counterId);
      this.setState({ counters: counters }); 
  };

  handleReset = () => {
      const counters = this.state.counters.map(c => {
          c.value = 0;
          return c;
      });
      this.setState({ counters: counters});
  };

  render(){
    return(
      <React.Fragment>
        <NavBar totalCounters={this.state.counters.filter(c => c.value > 0).length}/>
        <main className="container">
          <Counters 
          counters={this.state.counters}
          onDecrement={this.handleDecrement}
          onReset={this.handleReset} 
          onIncrement={this.handleIncrement}
          onDelete={this.handleDelete}
          />
        </main>
      </React.Fragment>
    );
  };
}

export default App;
