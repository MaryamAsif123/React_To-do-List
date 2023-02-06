import React, { Component } from 'react';
import './Task.css';
class Task extends Component {
  constructor(props){
    super(props)
  }
  handleDelete = () => {
    this.props.deleteTask(this.props.index);
  };
  // complete=()=>{
  //   //this.props.complete(this.props.index)
  //   const element = document.getElementsById('hello');
  //   element.style.nbackgroundColor = "red";
  //   element.clr==="green"? element.style.backgroundColor = "red" : "green"
  // }
  render() {
    return (
    <div className='container'>
        {this.props.showTask}
        <button className='btnstyle' onClick={this.handleDelete}>
            ⨉
        </button>
        <button className='btns' onClick={this.complete}>
            ✓
        </button>
    </div>
    );
  }
}
export default Task;
