import React from 'react';

class App extends React.Component{
  state = {
    count: 0
  }
  
  Plus = () => {
    this.setState( current => ({ count: current.count + 1 }))
  }

  Substract = () => {
    this.setState( current => ({ count: current.count - 1 }))
  }

  render() {
    return (
      <div>
        <h1>The nubmer is : {this.state.count}</h1>
        <button onClick={this.Plus}>Plus</button>
        <button onClick={this.Substract}>Substract</button>
      </div>
    )
  }
}

export default App;
