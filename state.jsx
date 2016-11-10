import React from 'react';
import {box, box2, box3, list} from './style.jsx';
import {Els} from './components.jsx';
import ReactDOM from 'react-dom';

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
      this.setState({count: 0});
    }

    remove(e) {

      let item = this.state.count;
      item > 0 && item--;
      this.setState({count: item});
      // ReactDOM.unmountComponentAtNode(ReactDOM.findDOMNode(e.target).remove())
    }

    render() {
      const {count} = this.state;

      return (
        <div style={{margin:20}}>
          <button onClick = {this.stateHandler}>Add</button>
          {count > 0 && <button  onClick = {this.remove}>Remove</button>}
          {count > 0 && <button  onClick = {this.clearState}>Clear</button>}
          <div style={box}> State: {count}</div>
          <Els number={count} ul={list} li1={box2} li2={box3} handler={this.remove}/>
        </div>
      );
    }
}


export default App;
