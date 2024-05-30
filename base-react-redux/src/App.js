import "./App.scss";
import Header from "./components/Header/Header";
import { Link } from "react-router-dom";

// class App extends React.Component {
//   render() {
//     return (
//       <div className="App-container">
//         <MyComponent></MyComponent>
//       </div>
//     );
//   }
// }

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

const App = () => {
  return (
    <div>
      <Header></Header>
      <div>
        test link
        <div>
          <button>
            <Link to="/users">User page</Link>
          </button>
          <button>
            <Link to="/admins">Admin page</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
