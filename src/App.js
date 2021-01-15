import React from "react";
import './App.css';

class App extends React.Component {

    state = {
        input: "",
        name: "",
        number: "",
    }

handleInput = (event) => {
this.setState({input:event.target.val})
}

render () {
    return (
        <div className="App">
            <div className='title'>
            <h1>Address Book</h1>
            <div>
            <input className="input"></input>
            <button className="button">Add new contact</button>
            </div>
            <div className="number">2</div>
            </div>
            
        </div>
        
        





    ) 
}


}




export default App;
