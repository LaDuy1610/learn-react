import logo from "./logo.svg";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { increaseCounter, decreaseCounter } from "./redux/action/counterAction";
import MyComponent from "./components/MyComponent";
import React from "react";

class App extends React.Component {
  state = {
    name: "Yuri",
    address: "Ha Noi",
    age: 23,
  };

  handleClick(event) {
    console.log(">> click me my buttom");
    console.log("Ten toi la: ", this.state.name);

    this.setState({
      name: "Yudal",
      age: Math.floor(Math.random() * 100 + 1),
    });
  }

  handleOnMoverOver(event) {
    console.log(">> hover me my buttom");
  }

  render() {
    return (
      <div>
        My name is {this.state.name} and I'm from {this.state.address} and I'm {this.state.age} year old
        <button onMouseOver={this.handleOnMoverOver}>Hover</button>
        <button
          onClick={(event) => {
            this.handleClick();
          }}
        >
          Click
        </button>
        <MyComponent></MyComponent>
      </div>
    );
  }
}

// const App = () => {
//   const count = useSelector((state) => state.counter.count);
//   const dispatch = useDispatch();

//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <div>Count = {count}</div>
//         <button onClick={() => dispatch(increaseCounter())}>Increase</button>
//         <button onClick={() => dispatch(decreaseCounter())}>Decrease</button>
//       </header>
//     </div>
//   );
// };

export default App;
