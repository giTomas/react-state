import React from 'react';
import {box, box2, box3, list} from './style.jsx';
import {Els, Els2} from './components.jsx';
// import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
      arr: []
                  }
    this.stateHandler = this.stateHandler.bind(this);
    this.clearState = this.clearState.bind(this);
    this.remove = this.remove.bind(this);
    this.addHandler = this.addHandler.bind(this);
    this.removeHandler = this.removeHandler.bind(this);
    this.clearHandler = this.clearHandler.bind(this);
    };

    addHandler() {
      let {arr: update} = this.state;
      let len = update.length;
      update.push(len > 0 ? update[len - 1] + 1 : 1);
      this.setState({arr: update});
    }

    removeHandler(e) {
      const {arr: toUpdate} = this.state;
      const maybeId = parseInt(e.target.id);
      const id = isNaN(maybeId) ? toUpdate[toUpdate.length - 1] : maybeId;
      const updated = toUpdate.filter((item) => item !== id);
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
      // console.log(arr);

      return (
        <div style={{margin:20}}>
          <button onClick = {this.stateHandler}>Add</button>
          {count > 0 && <button  onClick = {this.remove}>Remove</button>}
          {count > 0 && <button  onClick = {this.clearState}>Clear</button>}
          <div style={box}> State: {count}</div>
          <Els number={count} ul={list} li1={box2} li2={box3} handler={this.remove}/>

          <button onClick = {this.addHandler}>Add</button>
          {arr.length > 0 && <button  onClick = {this.removeHandler}>Remove</button>}
          {arr.length > 0 && <button  onClick = {this.clearHandler}>Clear</button>}
          <div style={box}> State: {arr.toString()}</div>
          <Els2 array={arr} ul={list} li1={box2} li2={box3} handler={this.removeHandler}/>
        </div>
      );
    }
}


export default App;
