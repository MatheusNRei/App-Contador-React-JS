import React, {Component,useState,useEffect} from "react";


const App = () => { // useState method
  const [count, setCount] = useState(0)
  
  useEffect(() => {  // useEffect method
    document.title = `Clicked ${count} times`

  } )
const increment= () => { //useState Hook
   setCount(count + 1);
 };
     return (
     <div>
       <h2>counter app </h2>
       <button onClick={increment}>Clicked {count} times </button>
     </div>
     )
class App extends Component { //class method
  state = {
    count: 0
  };
  increment = () => {

//     this.setState
//     ({
//       count: this.state.count + 1

//     });
//   };
//   componentDidMount() {
//     document.title = `Clicked ${this.state.count} times` 
//   }
//   componentDidUpdate() {
//     document.title = `Clicked ${this.state.count} times`
//   }

//   render () {
//     return (
//     <div>

//       <h2>counter app </h2>
//       <button onClick={this.increment}>
//       Clicked {this.state.count} times
    
//       </button>
//     </div>   

    

    // );
 
  }
}
}

export default App;
