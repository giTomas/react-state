import React from 'react';
import { styles } from './style.jsx';
import {Els, Els2} from './components.jsx';
import Radium from 'radium';
// import ReactDOM from 'react-dom';


@Radium
class App extends React.Component {
  constructor() {

    super();
    this.state = {
      count: 0,
      arr: []
    };
      //::this.fn === ::this.this.fn === this.fn.bind(this)
    this.stateHandler   = ::this.stateHandler;
    this.clearState     = ::this.clearState;
    this.remove         = ::this.remove;
    this.addHandler     = ::this.addHandler;
    this.removeHandler  = ::this.removeHandler;
    this.clearHandler   = ::this.clearHandler;
    };

    addHandler() {
      let {arr: update} = this.state;
      let len           = update.length;
      update.push(len > 0 ? update[len - 1] + 1 : 1);
      this.setState({arr: update});
    }

    removeHandler(e) {
      const {arr: toUpdate} = this.state;
      const maybeId         = parseInt(e.target.id);
      const id              = isNaN(maybeId) ? toUpdate[toUpdate.length - 1] : maybeId;
      const updated         = toUpdate.filter((item) => item !== id);
      this.setState({arr: updated})
    }

    clearHandler(){
      this.setState({arr: []})
    }

    stateHandler(e) {
      let {count: item} = this.state;
      item++;
      this.setState({count: item});
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
      console.log(e.target.id);
    }

    render() {
      const {count, arr} = this.state;
      const {box, box2, box3, list, mod} = styles;
      // console.log(arr);


      return (
        <div style={{margin:20}}>
          <button onClick = {this.stateHandler}>Add</button>
          {count > 0 && <button  onClick = {this.remove}>Remove</button>}
          {count > 1 && <button  onClick = {this.clearState}>Clear</button>}
          {/* { do { */}
          {/* if(count > 0) { */}
          {/* <button  onClick = {this.remove}>Remove</button>;} */}
          {/* if(count > 1) { */}
          {/* <button  onClick = {this.clearState}>Clear</button>;} */}
          {/* }} */}
          <div style={box}> State: {count}</div>
          <Els number={count} ul={list} li1={box2} li2={box3} handler={this.remove}/>

          <button onClick = {this.addHandler}>Add</button>
          {/* {do { */}
          {/* if (arr.length > 0)  { */}
          {/* <button  onClick = {this.removeHandler}>Remove</button>;} */}
          {/* else if (arr.length > 1) { */}
          {/* <button  onClick = {this.clearHandler}>Clear</button>;} */}
          {/* }} */}
          {arr.length > 0 && <button  onClick = {this.removeHandler}>Remove</button>}
          {arr.length > 1 && <button  onClick = {this.clearHandler}>Clear</button>}
          <div style={box}> State: {arr.toString()}</div>
          <Els2 array={arr} ul={list} li1={box2} li2={box3} mod={mod} handler={this.removeHandler}/>
        </div>
      );
    }
}

export default App;
