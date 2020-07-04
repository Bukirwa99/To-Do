import React, { Component } from "react";
import './App.css';


class App extends Component{
  constructor (props)
  {
    super(props);
    //eslint-disable-next-line
    {
      this.state ={
         newItem:"",
      list:[]
      }
    
      
    }
  }
  updateInput(key,value)
  {
    
    this.setState({
      [key]:value
    })
  }
  deleteItem(id)
  {
    const list =[...this.state.list]
    const updatedlist = list.filter(Item => Item.id !== id);
    this.setState({list: updatedlist});
  }
  addItem() 
  {
    const newItem =
    {
      id: 1+ Math.random (),
      value: this.state.newItem.slice()
    };
    const list =[...this.state.list];
    list.push(newItem);
    this.setState =({

      list,
      newItem:""
    })
  }
render ()
  {
  return (
    <div className="App">
      <div>
        <h4>Add Activity</h4>
        <br/>
        <input type="text"placeholder="Please enter item" value ={this.state.newItem}
        onChange={e => this.updateInput("newItem",e.target.value)}/>
        <button
        type ="submit"
        onClick={() => this.addItem()}>ADD</button>
        <br/>
        <ul>
          {this.state.list.map(Item =>{
            return(
              <li key={Item.id}>
                {Item.value}
                <button
                onClick={()=> this.deleteItem(Item.id)}
                >x</button>
                
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
