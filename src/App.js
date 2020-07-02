import { render } from "@testing-library/react";

import React from 'react';



function App() {
  constructor(props){
    super(props){
      this.state ={
        newItem:""
        list:[]
      }
    }
  }
  updateInput(key,value){
    this.setState[{
      [key]:value
    }]
  }
  deleteItem(id){
    const list =[...this.state.list]
    const updatedlist = list.filter(item => item.id !== id);
    this.setState({list: updatedlist});
  }
  addItem() {
    const newItem ={
      id=1+Math.random()
      value: this.state.newItem.slice()
    };
    const list =[...this.state.list];
    list.push(newItem);
    this.setState =[{
      list,
      newItem:""
    }]
  }
render ()
  {
  return (
    <div>
      <div>
        Add an Item---
        <br/>
        <input type="text"placeholder="Please enter item"Value ={this.state.newItem}
        onChange={e => this.updateInput("newItem",e.target.value)}/>
        <button
        onClick={() => this.addItem}>ADD</button>
        <br/>
        <ul>
          {this.state.map(item =>{
            return(
              <li key={id}>
                {item.value}
                <button
                onClick={()=> this.deleteItem[Item.id]}
                ></button>
                *
                                     </li>
            )
          })}
        </ul>
      </div>
    </div>
   
  );
}
}

export default App;
