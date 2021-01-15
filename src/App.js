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
        <div>
           <h1>Adress book </h1>
              <input value={this.state.input} onChange={this.handleInput}></input>
              
              <button value= {this.state.input} onClick={(this.addNumbers)}>add</button>
        
           <div className="numbers">{this.state.numbers.map((num,index)=>{
                 return <p key={index}>{num}</p>;})}
           </div>

        </div>
            
        
)}}




export default App;
