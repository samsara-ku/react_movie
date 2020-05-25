import React from 'react';

class App extends React.Component{
  constructor(props) {
    super(props)
    console.log('hello')
  }

  state = {
    count: 0
  }
  
  Plus = () => {
    this.setState( current => ({ count: current.count + 1 }))
  }

  Substract = () => {
    this.setState( current => ({ count: current.count - 1 }))
  }
  
  componentDidMount() {
    console.log('component rendered')
  }

  componentDidUpdate() {
    console.log('component updated')
  }

  componentWillUnmount() {
    console.log('component unmounted')
  }

  render() {
    console.log('render')
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
