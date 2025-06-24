//import React from "react";
import { Component } from "react";
class Intro extends Component{
   constructor () {
    super()
    this.state = {
        count : 0
    }
   }
   //create function for increment
   increment = () =>{
    this.setState({count : this.state.count  + 1})
    //         propertyName   :        0     + 1
   }
   //create function for decrement
   decrement = () =>{
    if(this.state.count > 0){
        this.setState({count : this.state.count - 1})
    }
    
   } 

    render(){
        return(
            <div>
                <h2 className="text-center">Learn State in React : Class Comp</h2>
                <div className="bg-dark text-light w-50 mx-auto p-3 text-center rounded-5 mt-3">
                    <h3>Add Item in Cart</h3>
                    <div className="btn-group">
                        <button className="btn btn-danger" onClick={this.increment}>+</button>
                        <button className="btn btn-warning">{this.state.count}</button>
                        <button className="btn btn-danger" onClick={this.decrement}>-</button>
                    </div>
                </div>
            </div>
        )
    }
}
export default Intro;