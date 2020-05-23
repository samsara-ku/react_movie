import React from 'react';

function Food({ fav }) {
  return <h1>I like {fav}</h1>;
}

/*
Upper case function is same with this codes

function Food(props) {
  return <h1>I like {props.fav}</h1>;
}
*/

function App() {
  return (
    <div className="App">
      <h1>Hello</h1>
      <Food fav="kimchi"></Food>
      <Food fav="pasta"></Food>
      <Food fav="ramen"></Food>
      <Food fav="cold noodles"></Food>
    </div>
  );
}

export default App;
