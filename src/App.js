import React from "react";
import './App.css';

class App extends React.Component {

    state = {
        input: "",
        numbers: [],
    }

handleInput = (event) => {
this.setState({input:event.target.value})
};

addNumbers = () => {
    let newNumbers = [...this.state.numbers]
    newNumbers.push(this.state.input)
    this.setState({numbers:newNumbers,input:""})
}



render () {
    return (
        <div className="App">
        <div className="App-container">
        <h1 className="title">Address book </h1> 
           <br></br>

              <input className="input" value={this.state.input} onChange={this.handleInput}></input>
              
              <button className="button" value= {this.state.input} onClick={(this.addNumbers)}>add</button>
        
           <div className="numbers" >{this.state.numbers.map((num,index)=>{
                 return <p className="numbers" key={index}>{num}</p>;})}
           </div>
        </div>
    </div>  
            
        
)}}




export default App;
