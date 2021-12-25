import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react'
import './Component/Card1.css'

import Card1 from './Component/Card1';
import Card2 from './Component/Card2';
 
  class App extends Component {
     constructor(props){
       super(props);
       this.state={
         funComp : false,
         clsComp : false
       }
     }
render() {
  return (
    
    <div className="App">
     <h1 className='hed'>Styling Using function and class Component</h1>
      <div className='parent'>
      <button className="first"onClick={()=>{this.setState({funComp:!this.state.funComp})}} >To see styling in functional Component</button>
      <br />
   <button className="fir"onClick={()=>{this.setState({clsComp:!this.state.clsComp})}} >To see styling in class Component</button>
   </div>
     {this.state.funComp===true
      ?
      <Card1/>
      :
      null}
      {this.state.clsComp===true
        ?
        <Card2/>
        :
        null}
</div>
    
  )
}
  }
export default App
