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
        
<div className="input">
<input type="text"/>

<div className="name">
    

<div className="number">



</div>

</div>








</div>





    ) 
}


}




export default App;
