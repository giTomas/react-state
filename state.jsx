import React from 'react';
import {box, box2, list} from './style.jsx';
import {Els} from './components.jsx';

class App extends React.Component {
  constructor() {
    super();

    this.state = {count: 0}
    this.stateHandler = this.stateHandler.bind(this);
    this.clearState = this.clearState.bind(this);
    this.remove = this.remove.bind(this);
    };

    stateHandler() {
      let item = this.state.count;
      item++;
      // let myArray = this.state.data;
      // Array.push(item);
      this.setState({count: item})
    };

    clearState() {
      let item = this.state.count;
      item > 0 && item--;
      this.setState({count: item});
    }

    remove(e) {
      console.log(e.target);
      e.target.remove();
    }

    render() {

      // function

      return (
        <div>
          <button onClick = {this.stateHandler}>Add</button>
          {this.state.count > 0 && <button onClick = {this.clearState}>Remove</button>}
          <div style={box}>State: {this.state.count}</div>
          <Els number={this.state.count} ul={list} li={box2} handler={this.remove}/>
        </div>
      );
    }
}


export default App;
